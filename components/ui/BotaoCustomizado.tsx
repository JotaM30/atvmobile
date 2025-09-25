import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

type Props = {
  titulo: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const BotaoCustomizado = ({ titulo, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: 'darkred',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
  },
});

export default BotaoCustomizado;