import React, { useState } from "react";
import { View, StatusBar, ScrollView, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { AppBar, IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import Carousel from 'react-native-snap-carousel';

const CourseCard = ({ title, imageSource, navigation, screenName }) => (
  <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
    <View style={{
      margin: 5,
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      resizeMode: 'cover'
    }}>
      <Image
        source={imageSource}
        style={{
          width: 300,
          height: 300,
          marginBottom: 15,
          borderRadius: 10
        }}
      />
      <Text style={{ textAlign: 'center', maxWidth: 180 }}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default function HomeScreen({ navigation }) {
  const appBarImage = require('../img/appbar_image.png');

  const abrirLinkExterno = () => {
    Linking.openURL("https://viverdeassistencia.com.br/blog/");
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ alignItems: 'center' }}>
          <Image
            source={appBarImage}
            style={{ width: 280, height: 50, resizeMode: 'contain', justifyContent: 'center' }}
          />
        </View>
      ),
      headerLeft: () => (
        <IconButton icon={() => <Icon name="menu" size={23} />} onPress={() => setIsModalVisible(true)} />
      ),
      headerStyle: {
        backgroundColor: "#0CC1EE"
      },
    });
    
  }, [navigation]);

  const carouselItems = [
    {
      title: 'Curso Iniciante Mobile',
      imageSource: require('../img/card1.png'),
      navigation: navigation,
      screenName: 'CursoIniciante',
    },
    {
      title: 'Curso Intermediário Mobile',
      imageSource: require('../img/card2.png'),
      navigation: navigation,
      screenName: 'CursoIntermediario',
    },
    {
      title: 'Curso de Software Mobile',
      imageSource: require('../img/card3.png'),
      navigation: navigation,
      screenName: 'CursoSoftware',
    },
  ];

  const renderCardItem = ({ item }) => {
    const { title, imageSource, navigation, screenName } = item;
    return (
      <CourseCard
        title={title}
        imageSource={imageSource}
        navigation={navigation}
        screenName={screenName}
      />
    );
  };


  return (
    
    <View style={{ flex: 1, backgroundColor: 'transparent'}}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={{ padding: 30, alignItems: 'center' }}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>Estude gratuitamente</Text>
        <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 20 }}>
          Nós oferecemos treinamentos tanto presenciais quanto on-line para aqueles que desejam adquirir habilidades em manutenção de celulares, sejam iniciantes ou já experientes.
        </Text>
        <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 20}}>
          Além disso, disponibilizamos cursos avançados para aqueles que buscam especialização em assistência técnica.
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>Nossos Cursos</Text>
        <Text style={{ textAlign: 'center', marginTop: 10 }}>Arraste para o lado para ver os próximos cursos</Text>
      </View>

      <Carousel
        layout="default"
        data={carouselItems}
        sliderWidth={400}
        itemWidth={300}
        renderItem={renderCardItem}
      />
    </ScrollView>

      <View style={{ position: 'flex', bottom: 1, alignItems: 'center', paddingTop: 10}}>
        <TouchableOpacity onPress={abrirLinkExterno} style={{ backgroundColor: '#00FF4C', padding: 15, borderRadius: 30, width: 250, marginBottom: 20, shadowColor: 'rgba(0, 0, 0, 5)', shadowOffset: { width: 0, height: 4 },shadowRadius: 6, shadowOpacity: 1, elevation: 5,  }}>
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>Saiba mais</Text>
        </TouchableOpacity>
      </View>

      <Modal isVisible={isModalVisible} onBackdropPress={() => setIsModalVisible(false)}>
        <TouchableOpacity onPress={() => {
              setIsModalVisible(false);
              navigation.navigate('Contato');
            }}
            style={{  alignSelf: 'stretch'}}>
          <View style={{padding: 10, borderRadius: 10, backgroundColor: "#0CC1EE", alignItems: 'center'}}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold'}}>Contato </Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>

    
  );
}
