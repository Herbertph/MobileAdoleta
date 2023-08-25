import React from 'react';
import { View, Image, StyleSheet, Dimensions, StatusBar, SafeAreaView, Button, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import placeholderImage from './src/images/placeholder.png'; // Importe a imagem
import logoImage from './src/images/logo.png'; // Importe a imagem
import arquimedes from './src/images/arquimedes2.png'; // Importe a imagem
import floresta from './src/images/floresta.png'; // Importe a imagem
import acho from './src/images/acho.png'; // Importe a imagem
import astronautas from './src/images/astronautas.png'; // Importe a imagem
import fazendinha from './src/images/fazendinha.png'; // Importe a imagem
import fuga from './src/images/fuga.png'; // Importe a imagem
import aero from './src/images/aero.png'; // Importe a imagem
import fora from './src/images/fora.png'; // Importe a imagem

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
          <TouchableOpacity onPress={() => navigation.navigate('Arquimedes')}>
            <SquareImage placeholderImage={arquimedes} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Arquimedes')}>
            <SquareImage placeholderImage={floresta} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Arquimedes')}>
            <SquareImage placeholderImage={acho} />
          </TouchableOpacity>
        
        </View>
        <View style={styles.row} >
          <TouchableOpacity onPress={() => navigation.navigate('Arquimedes')}>
            <SquareImage placeholderImage={astronautas} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Arquimedes')}>
            <SquareImage placeholderImage={fazendinha} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Arquimedes')}>
            <SquareImage placeholderImage={fuga} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('Arquimedes')}>
            <SquareImage placeholderImage={aero} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Arquimedes')}>
            <SquareImage placeholderImage={fora} />
          </TouchableOpacity>
          <SquareImage />
        </View>
      </View>

    </SafeAreaView>
  );
};

function ArquimedesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={false} barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={arquimedes}
        />
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Arquimedes" component={ArquimedesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
   // resizeMode: 'contain',
   // borderWidth: 1,
   // borderColor: 'black'
  },
});

export default App;
