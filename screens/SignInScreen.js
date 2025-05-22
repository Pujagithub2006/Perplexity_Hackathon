import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>⚖️ LawBot</Text>
      <Text style={styles.title}>Welcome Back!</Text>

      <TextInput
        placeholder="📧 Email"
        placeholderTextColor="#888"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="🔒 Password"
        placeholderTextColor="#888"
        style={styles.input}
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enter Courtroom 🎯</Text>
      </TouchableOpacity>

      <Text onPress={() => navigation.navigate('Sign Up')} style={styles.link}>
        No account? Join the Bar 👩‍⚖️
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFD700',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: '#F0F0F0',
    marginBottom: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  input: {
    backgroundColor: '#1C1C1E',
    color: '#fff',
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#0D0D0D',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
    color: '#CCCCCC',
    fontSize: 14,
  },
});
