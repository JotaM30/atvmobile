import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View, Text } from 'react-native';

type Props = {
  onSubmit: (username: string, email: string) => void;
};

const LoginForm = ({ onSubmit }: Props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    onSubmit(username, email);
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Entrar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 50,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default LoginForm;
