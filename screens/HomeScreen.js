import React, { useState } from "react";
import { View, StatusBar, ScrollView, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { AppBar, IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import Carousel from 'react-native-snap-carousel';
import { setStatusBarHidden } from "expo-status-bar";

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
      title: (
        <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Image
            source={appBarImage}
            style={{ width: 200, height: 40, resizeMode: 'contain', justifyContent: 'space-between' }}
          />
        </View>
      ),
      headerLeft: () => (
        <IconButton icon={(props) => <Icon name="menu" {...props} />} onPress={() => setIsModalVisible(true)} />
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
      imageSource: require('../img/image3.png'),
      navigation: navigation,
      screenName: 'CursoIntermediario',
    },
    {
      title: 'Curso de Software Mobile',
      imageSource: require('../img/image2.png'),
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
    
    <View style={{ flex: 1 }}>
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

      <View style={{ position: 'flex', bottom: 0, alignItems: 'center', marginTop: 5 }}>
        <TouchableOpacity onPress={abrirLinkExterno} style={{ backgroundColor: '#00FF4C', padding: 20, borderRadius: 30, width: 250, marginBottom: 20 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Saiba mais</Text>
        </TouchableOpacity>
      </View>

      <Modal isVisible={isModalVisible} onBackdropPress={() => setIsModalVisible(false)}>
        <View style={{ backgroundColor: '#0CC1EE', padding: 5, borderRadius: 15, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              setIsModalVisible(false);
              navigation.navigate('Contato');
            }}
            style={{ paddingVertical: 5 }}
          >
            <Text style={{ color:'#FFFF', fontWeight: 'bold', fontSize: 20 }}>Contato</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>

    
  );
}
