<<<<<<< Updated upstream:screens/CursoInicianteMobileScreen.js
import React from "react";
import { View, Text, Image } from 'react-native';

export default function CursoInicianteMobileScreen() {
  return (
    <View>
      <Image source={require('./image1.png')} />
      <Text>Tela do Curso Iniciante Mobile</Text>
      {/* Adicione o conteúdo da tela aqui */}
    </View>
  );
}
=======
import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, Button } from 'react-native';
import { IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const CursoIniScreen = ({ navigation }) => {
  const bannerImage = require('../img/image1.png'); // Certifique-se de substituir 'nome_da_imagem.jpg' pelo nome real da sua imagem
  const appBarImage = require('../img/appbar_image.png'); // Certifique-se de substituir 'appBarImage.png' pelo nome real da sua imagem
  const handleVoltarClick = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <IconButton icon={<Icon name="arrow-left" style={{ marginLeft: 10 }} />} onPress={handleVoltarClick} />
        <View style={{ alignItems: 'center' }}>
          <Image
            source={appBarImage}
            style={{ width: 200, height: 50, resizeMode: 'contain' }}
          />
        </View>
        {/* IconButton invisível e não clicável */}
        <IconButton icon={<Icon name="magnify" style={styles.magnify} />} />
      </View>

      {/* Banner com a imagem do curso */}
      <Image
        style={styles.banner}
        source={bannerImage}
      />

      {/* Texto descritivo do curso em um ScrollView */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.courseDescription}>
          {`Aqui vai o texto descritivo do curso. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
        </Text>
      </ScrollView>

      {/* Botão para se inscrever */}
      <View style={styles.buttonContainer}>
        <Button
          title="Inscrever-se"
          onPress={() => {
            // Adicione a lógica de inscrição aqui
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0CC1EE',
    paddingTop: 30,
    paddingBottom: 10,
  },
  banner: {
    width: '100%',
    height: 200,
  },
  scrollView: {
    flex: 1,
  },
  courseDescription: {
    padding: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  magnify: {
    display: 'none',
  },
});

export default CursoIniScreen;
>>>>>>> Stashed changes:screens/CursoIniScreen.js
