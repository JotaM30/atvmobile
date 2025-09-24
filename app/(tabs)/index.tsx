import { Image, StyleSheet, Text, View } from 'react-native';
 
export default function App() {
  return (
    // No JSX:
<View style={styles.cartao}>
  <Image source={{uri: "https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2013/02/17/1331582167028_1/neymar-o-novo-mi%C3%BAdo-maravilha-brasileiro.jpg"}} style={styles.foto} />
  <Text style={styles.nome}>...</Text>
  <Text style={styles.profissao}>...</Text>
</View>
);
}
const styles = StyleSheet.create({
  cartao: {
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profissao: {
    fontSize: 16,
    color: 'gray',
  }
});
 
