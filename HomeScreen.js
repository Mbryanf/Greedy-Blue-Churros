import React, { useState } from "react";
import { View, StatusBar, ScrollView, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Modal from 'react-native-modal';

const CourseCard = ({ title, imageSource, navigation, screenName }) => (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <View style={{
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
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

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <View style={{ padding: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Estude gratuitamente</Text>
        <Text style={{ textAlign: 'center', marginTop: 10 }}>
          Nós oferecemos treinamentos tanto presenciais quanto on-line para aqueles que desejam adquirir habilidades em manutenção de celulares, sejam iniciantes ou já experientes.
        </Text>
        <Text style={{ textAlign: 'center', marginTop: 10 }}>
          Além disso, disponibilizamos cursos avançados para aqueles que buscam especialização em assistência técnica.
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Nossos Cursos</Text>
      </View>

      <ScrollView horizontal={true} style={{ marginTop: 10, paddingBottom: 0, flexGrow: 0 }} showsHorizontalScrollIndicator={false}>
        <CourseCard
          title="Curso Iniciante Mobile"
          imageSource={require('../img/image1.png')}
          navigation={navigation}
          screenName="CursoIniciante"
        />
        <CourseCard
          title="Curso Intermediário Mobile"
          imageSource={require('../img/image2.png')}
          navigation={navigation}
          screenName="CursoIntermediario"
        />
        <CourseCard
          title="Curso de Software Mobile"
          imageSource={require('../img/image3.png')}
          navigation={navigation}
          screenName="CursoSoftware"
        />
      </ScrollView>

      <TouchableOpacity onPress={abrirLinkExterno} style={{ backgroundColor: '#00FF4C', padding: 20, borderRadius: 30, alignSelf: 'center', width: 250, marginTop: 20, marginBottom: 20 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Saiba mais</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} onBackdropPress={() => setIsModalVisible(false)}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <TouchableOpacity
            onPress={() => {
              setIsModalVisible(false);
              navigation.navigate('Contato');
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
