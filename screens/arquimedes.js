import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, ImageBackground, ScrollView, Image, StyleSheet, Linking, Platform } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import YoutubeIframe from 'react-native-youtube-iframe';

import arquimedes from '../src/images/arquimedes2.png'; // Importe a imagem

const openInstagramProfile = () => {
  const username = 'adoletajogos'; // O nome de usuário do Instagram
  const appURL = `instagram://user?username=${username}`; // URL para abrir diretamente o app Instagram
  const webURL = `https://instagram.com/${username}`; // URL para abrir no navegador web

  // Tenta abrir o perfil no app Instagram
  Linking.canOpenURL(appURL).then((supported) => {
    if (supported) {
      return Linking.openURL(appURL);
    } else {
      // Se não puder abrir o app Instagram, abre no navegador web
      return Linking.openURL(webURL);
    }
  });
};


const openCartURL = () => {
  const cartURL = 'https://loja.adoletajogos.com.br/'; // Substitua pelo URL do seu carrinho
  Linking.openURL(cartURL);
};

function ArquimedesScreen({ navigation }) {
  // Esconde a barra de navegação para esta tela
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={false} barStyle="light-content" />
      <View style={styles.contentContainer}>
      <View style={styles.logoAndButtonContainer}>
          {/* Container para o logotipo */}
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={arquimedes} />
          </View>
          {/* Container para o botão */}
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText} onPress={openCartURL}>
              Compre agora
            </Text>
          </View>
        </View>

        <ScrollView style={styles.scrollContainer}>

          <View style={styles.listItem}>
            <FontAwesome name="child" size={24} color="#592F6C" />
            <Text style={styles.listItemText}>Idade: 8+</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.listItem}>
            <Fontisto name="persons" size={20} color="#592F6C" />
            <Text style={styles.listItemText}>Jogadores: 2 a 5</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.listItem}>
            <MaterialCommunityIcons name="account-clock" size={24} color="#592F6C" />
            <Text style={styles.listItemText}>Duracao: 20 min</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.listItem}>
            <MaterialCommunityIcons name="cards" size={24} color="#592F6C" />
            <Text style={styles.listItemText}>Cartas: 110</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.textContainer}>
            <Text style={styles.descriptionTitle}>Arquimedes</Text>
            <Text style={styles.descriptionText}>
              Arquimedes é um jogo de cartas rápido, Divertido e Educativo em que os jogadores devem fazer cálculos e se livrarem de todas as cartas.
              Escolha sabiamente quais cartas devem ser jogadas!
              Use uma das quatro operações fundamentais da matemática!
              Seja o primeiro a esvaziar suas mãos. Divirta-se e aprenda!
            </Text>
            <View style={styles.separator} />
          </View>

          <View style={styles.youtubeContainer}>
            <YoutubeIframe
              webViewStyle={{ opacity: 0.99 }}
              height={200}
              play={false}
              videoId={"AGCQZbL4Vhk"} // ID do vídeo corrigido
            />
          </View>

        </ScrollView>

      </View>
      <View style={styles.navbar}>
        <FontAwesome name="home" size={24} color="white" onPress={() => navigation.navigate('Home')} />
        <FontAwesome name="instagram" size={24} color="white" onPress={openInstagramProfile} />
        <MaterialCommunityIcons name="cart-variant" size={24} color="white" onPress={openCartURL} />
      </View>


    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#F39200',
  },
  logoAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    backgroundColor: '#592F6C',
    paddingVertical: 10,  // Espaçamento vertical
    paddingHorizontal: 15,  // Espaçamento horizontal
    alignItems: 'center',  // Alinhar texto ao centro
    borderRadius: 60,
    color: '#fff',  // Cor do texto

  },
  logo: {

    width: 300,
    height: 250,

    alignSelf: 'center',
  },

  contentContainer: {
    flex: 1,  // Adicione esta linha
    flexDirection: 'column',
  },
  scrollContainer: {
    flex: 1,  // Adicione esta linha
    marginTop: 30,
    backgroundColor: '#F1F2E7',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: '#592F6C',
    borderRadius: 10,
    marginBottom: Platform.OS === 'ios' ? 35 : 45,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  listItemText: {
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc', // ou qualquer outra cor que você preferir
    marginLeft: 10, // você também pode adicionar uma margem para a esquerda e a direita, se preferir
    marginRight: 10,
  },

  textContainer: {
    padding: 15, // Adiciona preenchimento em todos os lados
  },
  descriptionTitle: {
    fontSize: 20, // Define o tamanho da fonte
    fontWeight: 'bold', // Torna o texto em negrito
    marginBottom: 10, // Adiciona uma margem abaixo do título
    color: '#592F6C', // Define a cor do texto do título
  },
  descriptionText: {
    fontSize: 16, // Define o tamanho da fonte
    lineHeight: 24, // Define o espaçamento entre as linhas
    color: '#333', // Define a cor do texto
  },
  videoContainer: {
    marginTop: 20, // Margem superior

  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#333',
    height: Platform.OS === 'ios' ? 70 : 50,  // Aumenta a altura para 60 no iOS e mantém 50 para Android
    borderTopLeftRadius: 10,  // Arredondar apenas o canto superior esquerdo
    borderTopRightRadius: 10,  // Arredondar apenas o canto superior direito

  },

  youtubeContainer: {
    marginLeft: 10,  // Margem à esquerda de 10
    marginRight: 10, // Margem à direita de 10
    borderColor: '#592F6C', // Cor da borda
    borderWidth: 5, // Espessura da borda
    marginBottom: 20, // Margem inferior de 20
  },
});


export default ArquimedesScreen;