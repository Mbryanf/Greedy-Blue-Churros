import React, { useState } from "react";
import { View, StatusBar, ScrollView, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Modal from 'react-native-modal';
import ContatoScreen from './screens/ContatoScreen'

// Função que renderiza um card com imagem e título
const CourseCard = ({ title, imageSource }) => (
  <View style={{
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center', // Centraliza o conteúdo dentro do card
  }}>
    <Image
      source={imageSource}
      style={{
        width: 150,
        height: 150,
        marginBottom: 5,
        borderRadius: 10,
      }}
    />
    <Text style={{ textAlign: 'center', maxWidth: 150 }}>{title}</Text>
  </View>
);

// Configuração do Stack Navigator
const Stack = createStackNavigator();

// Tela da página inicial
function HomeScreen({ navigation }) {
  const appBarImage = require('./img/appbar_image.png'); // Substitua pelo caminho da sua imagem

  const abrirLinkExterno = () => {
    Linking.openURL("https://viverdeassistencia.com.br/blog/");
  };

  // Configuração da navegação para a tela inicial
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: (
        <View style={{ alignItems: 'center' }}>
          <Image
            source={appBarImage}
            style={{ width: 200, height: 40, resizeMode: 'contain' }}
          />
        </View>
      ),
      headerLeft: () => (
        <IconButton icon={(props) => <Icon name="menu" {...props} />} onPress={() => setIsModalVisible(true)} />
      ),
      headerRight: () => (
        <HStack>
          <IconButton icon={(props) => <Icon name="magnify" {...props} />} />
          <IconButton icon={(props) => <Icon name="dots-vertical" {...props} />} />
        </HStack>
      ),
      headerStyle: {
        backgroundColor: "#0CC1EE",
      },
    });
  }, [navigation]);

  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para controlar a visibilidade do modal

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      {/* Seção "Estude gratuitamente" */}
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Estude gratuitamente</Text>
        <Text style={{ textAlign: 'center', marginTop: 10 }}>
          Nós oferecemos treinamentos tanto presenciais quanto on-line para aqueles que desejam adquirir habilidades em manutenção de celulares, sejam iniciantes ou já experientes.
        </Text>
        <Text style={{ textAlign: 'center', marginTop: 10 }}>
          Além disso, disponibilizamos cursos avançados para aqueles que buscam especialização em assistência técnica.
        </Text>
      </View>

      {/* Título "Nossos Cursos" */}
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Nossos Cursos</Text>
      </View>

      {/* Scroll frame com imagens e títulos */}
      <ScrollView horizontal={true} style={{ marginTop: 10, paddingBottom: 0, flexGrow: 0 }} showsHorizontalScrollIndicator={false}>
        <CourseCard
          title="Curso Iniciante Mobile"
          imageSource={require('./img/image1.png')}
        />
        <CourseCard
          title="Curso Intermediário Mobile"
          imageSource={require('./img/image2.png')}
        />
        <CourseCard
          title="Curso de Software Mobile"
          imageSource={require('./img/image3.png')}
        />
      </ScrollView>

      {/* Botão "Saiba mais" que redireciona para o link */}
      <TouchableOpacity onPress={abrirLinkExterno} style={{ backgroundColor: '#00FF4C', padding: 20, borderRadius: 30, alignSelf: 'center', width: 250, marginTop: 20, marginBottom: 20 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Saiba mais</Text>
      </TouchableOpacity>

      {/* Modal com lista de atalhos */}
      <Modal isVisible={isModalVisible} onBackdropPress={() => setIsModalVisible(false)}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <TouchableOpacity
            onPress={() => {
              setIsModalVisible(false);
              navigation.navigate('Contato'); // Navega para a tela de Contato
            }}
            style={{ paddingVertical: 10 }}
          >
            <Text>Contato</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contato" component={ContatoScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
