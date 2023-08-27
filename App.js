import React from 'react';
import { View, Image, StyleSheet, Dimensions, StatusBar, SafeAreaView, Button, Text, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
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
const imageSize = (screenWidth - 20) / 2;


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
        <Image style={styles.logo} source={logoImage} />
      </View>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[styles.card, { marginTop: 30 }]}>
            <Text style={styles.itemText}>Arquimedes</Text>
            <SquareImage placeholderImage={arquimedes} />
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigation.navigate('Arquimedes')}
            >
              <Text style={styles.buttonText}>Saiba mais!</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.card, { marginTop: 30 }]}>
            <Text style={styles.itemText}>Floresta</Text>
            <SquareImage placeholderImage={floresta} />
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigation.navigate('Arquimedes')}
            >
              <Text style={styles.buttonText}>Saiba mais!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.itemText}>Acho</Text>
            <SquareImage placeholderImage={acho} />
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigation.navigate('Arquimedes')}
            >
              <Text style={styles.buttonText}>Saiba mais!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Text style={styles.itemText}>Astronautas</Text>
            <SquareImage placeholderImage={astronautas} />
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigation.navigate('Arquimedes')}
            >
              <Text style={styles.buttonText}>Saiba mais!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.itemText}>Fazendinha</Text>
            <SquareImage placeholderImage={fazendinha} />
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigation.navigate('Arquimedes')}
            >
              <Text style={styles.buttonText}>Saiba mais!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Text style={styles.itemText}>Fuga do Zoo</Text>
            <SquareImage placeholderImage={fuga} />
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigation.navigate('Arquimedes')}
            >
              <Text style={styles.buttonText}>Saiba mais!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.itemText}>A.E.R.O.</Text>
            <SquareImage placeholderImage={aero} />
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigation.navigate('Arquimedes')}
            >
              <Text style={styles.buttonText}>Saiba mais!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Text style={styles.itemText}>Fora de Ordem</Text>
            <SquareImage placeholderImage={fora} />
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigation.navigate('Arquimedes')}
            >
              <Text style={styles.buttonText}>Saiba mais!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.navbar}>
        <FontAwesome name="home" size={24} color="white" />
        <FontAwesome name="instagram" size={24} color="white" />
        <MaterialCommunityIcons name="cart-variant" size={24} color="white" />
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
    height: 100,
  },
  logo: {

    width: 150,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
  scrollContainer: {
    backgroundColor: 'white',  // Fundo branco
    borderTopLeftRadius: 10,  // Arredondar apenas o canto superior esquerdo
    borderTopRightRadius: 10,  // Arredondar apenas o canto superior direito
    borderWidth: 2,  // Espessura da borda
    borderColor: '#F39200',  // Cor da borda
    borderRadius: 10,  // Arredondamento da borda
    marginBottom: Platform.OS === 'ios' ? 35 : 45,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    margin: 5,
  },
  itemText: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 25,
  },
  card: {
    width: imageSize,
    borderWidth: 1,
    borderColor: '#F39200',
    marginRight: 5,
    marginLeft: 3,
    alignItems: 'center',
    padding: 10,
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
  navText: {
    color: '#fff',
  },
  customButton: {
    backgroundColor: '#F39200',  // Cor de fundo laranja
    paddingVertical: 15,  // Espaçamento vertical
    paddingHorizontal: 20,  // Espaçamento horizontal
    borderRadius: 5,  // Borda arredondada
    alignItems: 'center',  // Alinhar texto ao centro
  },
  buttonText: {
    color: 'white',  // Cor do texto
    fontSize: 16,  // Tamanho da fonte
  },
});

export default App;
