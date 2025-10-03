import { Button, Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen({ navigation }) {

    const handleLogin = () => 
    {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.loginBoxContainer}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            placeholder="Senha"
            secureTextEntry={true}
            style={styles.input}
          />
          <Button title="Entrar" onPress={handleLogin} />
        </View>
      );
}

const styles = StyleSheet.create({
  // Header
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f0f0f0',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  // Tela dividida
  telaDivididaContainer: {
    flex: 1,
  },
  mapaContainer: {
    flex: 2,
    backgroundColor: 'crimson',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listaContainer: {
    flex: 1,
    backgroundColor: 'firebrick',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },

  // Área de login com fundo preto
  loginArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
  },

  loginBoxContainer: {
    maxWidth: 600,
    height: 200,
    justifyContent: 'center',
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
  },
});
