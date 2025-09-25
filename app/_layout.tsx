import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { View, StyleSheet, Text } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';

// Importando os componentes LoginBox e LoginForm
import LoginBox from '../components/ui/LoginBox';  // Caminho correto para a subpasta ui

import LoginForm from '../components/ui/LoginForm'; // Ajuste o caminho conforme necessário
import BotaoCustomizado from '../components/ui/BotaoCustomizado';  // Para pastas acima

export const unstable_settings = {
  anchor: '(tabs)',  // Caso esteja usando âncoras no expo-router
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // Função para lidar com o envio do login
  const handleLoginSubmit = (username: string, email: string) => {
    console.log(`Login realizado com: ${username} - ${email}`);
    // Aqui você pode adicionar a lógica de autenticação, como verificação no banco de dados.
  };

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      

      {/* LoginBox - Contendo o formulário de login */}
      <LoginBox onSubmit={handleLoginSubmit} />

      {/* Botão Customizado */}
      <BotaoCustomizado 
        titulo="Clique aqui" 
        onPress={() => console.log('Botão pressionado!')} 
      />

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

