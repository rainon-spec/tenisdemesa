import { Text, View, StyleSheet } from "react-native";

export default function aboutScreen() {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>A origem do tênis de mesa remonta ao final do século XIX, na Inglaterra, onde surgiu como uma adaptação do tênis de campo para ambientes internos, especialmente durante o inverno. Inicialmente, era um passatempo da elite, jogado sobre mesas de jantar, utilizando livros como rede e tampas de caixas de charuto como raquetes. Com o tempo, o jogo foi se desenvolvendo e ganhando regras mais definidas.

No início do século XX, o esporte começou a se popularizar e passou a ser comercializado. O nome “pingue-pongue” surgiu como uma marca registrada da empresa J. Jaques & Son, que ajudou a padronizar equipamentos e regras. Posteriormente, o termo “tênis de mesa” foi adotado oficialmente para competições.

A organização internacional do esporte começou em 1926, com a fundação da International Table Tennis Federation, responsável até hoje por regulamentar regras e promover campeonatos mundiais. Desde então, o tênis de mesa cresceu significativamente, especialmente na China, que se tornou uma potência dominante na modalidade.

O esporte foi incluído nos Jogos Olímpicos em 1988, durante as Olimpíadas de Seul, consolidando sua relevância no cenário esportivo internacional. Desde então, atletas de alto nível têm elevado o esporte a um patamar de grande competitividade e espetáculo.

O tênis de mesa é jogado em uma mesa dividida por uma rede, onde dois ou quatro jogadores utilizam raquetes para rebater uma pequena bola leve. Apesar de parecer simples à primeira vista, o esporte exige reflexos rápidos, controle motor refinado e um alto nível de concentração.

Atualmente, o tênis de mesa é um dos esportes mais praticados do mundo, presente em escolas, clubes e competições profissionais. Sua acessibilidade, aliada à complexidade técnica, faz com que seja uma atividade apreciada por pessoas de todas as idades.</Text> 
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f3338',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: '#fff',
  },
});