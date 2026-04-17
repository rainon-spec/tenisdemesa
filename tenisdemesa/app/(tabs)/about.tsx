import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function aboutScreen() {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Voltar para a outra tela</Text> 
          <Link href="/" style={styles.text}>
            Página Sobre  
          </Link>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});