import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PhoneNumber = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigation = useNavigation(); // Hook điều hướng

  const validatePhoneNumber = (text) => {
    let cleaned = text.replace(/\D/g, '');
    if (cleaned.startsWith('84')) {
      cleaned = '+84 ' + cleaned.slice(2);
    }
    setPhone(cleaned);

    const phoneRegex = /^(0\d{9}|\+84\s\d{3}\s\d{3}\s\d{3})$/;
    if (!phoneRegex.test(cleaned)) {
      setError('Số điện thoại không đúng định dạng. Vui lòng nhập lại.');
      setIsValid(false);
    } else {
      setError('Số điện thoại hợp lệ.');
      setIsValid(true);
    }
  };

  const handleSubmit = () => {
    if (isValid && phone) {
      navigation.navigate('Home'); // Chuyển sang Home
    } else {
      alert('Vui lòng nhập số điện thoại hợp lệ.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nhập số điện thoại</Text>
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        keyboardType="numeric"
        value={phone}
        onChangeText={validatePhoneNumber}
        placeholder="Nhập số điện thoại"
      />
      <Text style={[styles.messageText, { color: isValid ? 'green' : 'red' }]}>{error}</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  label: { fontSize: 16, marginBottom: 10, marginTop: 40 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, fontSize: 16 },
  inputError: { borderColor: 'red' },
  button: { backgroundColor: 'blue', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default PhoneNumber;
