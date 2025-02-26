import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false); 
  const validatePhoneNumber = (text) => {
    // Loại bỏ ký tự không phải số
    let cleaned = text.replace(/\D/g, '');

    // Nếu bắt đầu bằng 84, đổi thành +84
    if (cleaned.startsWith('84')) {
      cleaned = '+84 ' + cleaned.slice(2);
    }

    setPhone(cleaned);

    // Regular Expression kiểm tra số điện thoại hợp lệ
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
      alert('Số điện thoại hợp lệ! Tiếp tục...');
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
       <Text style={[styles.messageText, { color: isValid ? 'green' : 'red' }]}>
          {error}
        </Text>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
    justifyContent: '',
    backgroundColor: '#f9f9f9',
  },
  label: { fontSize: 16, marginBottom: 10, marginTop: 40 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PhoneNumberInput;
