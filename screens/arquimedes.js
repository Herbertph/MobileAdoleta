import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ImageBackground, ScrollView, Image, StyleSheet } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import arquimedes from '../src/images/arquimedes2.png'; // Importe a imagem
import idade from '../src/images/arquimedesidade.png'; // Importe a imagem
import jogadores from '../src/images/arquimedesjogadores.png'; // Importe a imagem
import duracao from '../src/images/arquimedesduracao.png'; // Importe a imagem

function ArquimedesScreen({ navigation }) {


  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={false} barStyle="light-content" />
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={arquimedes} />
        </View>

      

        <ScrollView style={styles.scrollContainer}>

        </ScrollView>
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
    height: 100,
  },
  logo: {

    width: 300,
    height: 250,

    alignSelf: 'center',
  },
  
  contentContainer: {
    flexDirection: 'column', // alinha as children verticalmente
  },
  scrollContainer: {
    marginTop: 130,
    backgroundColor: '#F1F2E7',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: '#592F6C',
    borderRadius: 10,
    marginBottom: Platform.OS === 'ios' ? 35 : 45,
  },
});


export default ArquimedesScreen;