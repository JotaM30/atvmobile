import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from './LoginForm'; // Importando o componente LoginForm

type Props = {
  onSubmit: (username: string, email: string) => void;
};

const LoginBox = ({ onSubmit }: Props) => {
  return (
    <View style={styles.loginBox}>
      <Text style={styles.header}>Login</Text>
      <LoginForm onSubmit={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginBox: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LoginBox;
