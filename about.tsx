import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function About() {
  return (
      <View style={styles.container}>
      <Text style={styles.text}>Seja muito bem-vindo!</Text>
        <Link href="/" style={styles.button}>
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

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },

  text: {
    color: '#fff',
  },
});
