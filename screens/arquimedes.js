import React from 'react';
import { View, Image, StyleSheet, Dimensions, StatusBar, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import placeholderImage from './src/images/placeholder.png'; // Importe a imagem
import logoImage from './src/images/logo.png'; // Importe a imagem
import arquimedes from './src/images/placeholder.png'; // Importe a imagem
import floresta from './src/images/placeholder.png'; // Importe a imagem
import acho from './src/images/placeholder.png'; // Importe a imagem
import astronautas from './src/images/placeholder.png'; // Importe a imagem
import fazendinha from './src/images/placeholder.png'; // Importe a imagem
import fuga from './src/images/placeholder.png'; // Importe a imagem
import aero from './src/images/placeholder.png'; // Importe a imagem

const screenWidth = Dimensions.get('window').width;
const imageSize = (screenWidth - 10) / 3;

function SquareImage({ placeholderImage }) {
  return (
    <Image
      style={styles.image}
      source={placeholderImage}
    />
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F39200' }}>
      <Image
        style={styles.logo}
        source={logoImage}
      />
      <SquareImage placeholderImage={arquimedes} />
      <SquareImage placeholderImage={floresta} />
      <SquareImage placeholderImage={acho} />
      <SquareImage placeholderImage={astronautas} />
      <SquareImage placeholderImage={fazendinha} />
      <SquareImage placeholderImage={fuga} />
      <SquareImage placeholderImage={aero} />
    </View>
  );
}

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={false} barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={logoImage}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.row}>
          <SquareImage placeholderImage={arquimedes} />
          <SquareImage />
          <SquareImage />
        </View>
        <View style={styles.row}>
          <SquareImage />
          <SquareImage />
          <SquareImage />
        </View>
        <View style={styles.row}>
          <SquareImage />
          <SquareImage />
          <SquareImage />
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, 
    backgroundColor: '#F39200',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20, 
    marginTop: 20, 
  },
  logo: {
    
    width: 150, 
    height: 150, 
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: imageSize,
    height: imageSize,
    resizeMode: 'contain', 
    borderWidth: 1,      
    borderColor: 'black' 
  },
});

export default App;
