import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, Button, Linking } from 'react-native';
import { IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const CursoSoftwareScreen = ({ navigation }) => {
  const bannerImage = require('../img/image2.png'); 
  const appBarImage = require('../img/appbar_image.png'); 
  const handleVoltarClick = () => {
    navigation.goBack();
  };

  const handleInscricaoClick = () => {
    navigation.navigate('Contato');
  };

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <IconButton icon={<Icon name="arrow-left" size={23} />} onPress={handleVoltarClick} />
        <View style={{ alignItems: 'center' }}>
          <Image
            source={appBarImage}
            style={{ width: 200, height: 50, resizeMode: 'contain' }}
          />
        </View>
      </View>

      {/* Banner com a imagem do curso */}
      <Image
        style={styles.banner}
        source={bannerImage}
      />

      {/* Texto descritivo do curso em um ScrollView */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.courseDescription}>
          Este curso é do zero ao avançado para você que deseja trabalhar com software em celulares.
        </Text>
        <Text style={styles.courseTopic}>
          Desbloqueio de potencialidades avançadas 
        </Text>
        <Text style={styles.courseDescription}>
          O curso sobre software de smartphones oferece conhecimento especializado em desbloqueios. 
        Isso permite não apenas desbloquear aparelhos de operadoras específicas, mas também explorar o potencial do dispositivo, como a instalação de ROMs personalizadas, 
        que podem oferecer recursos extras e melhor desempenho
        </Text>
        <Text style={styles.courseTopic}>
          Resolução de problemas brickados 
        </Text>
        <Text style={styles.courseDescription}>
          Smartphones "brickados" (tornados inutilizáveis) devido a atualizações malsucedidas ou problemas de software
        podem ser recuperados por meio de técnicas específicas. Esse curso ensina como identificar e corrigir esses problemas, restaurando os dispositivos para 
        o funcionamento normal.
        </Text>
        <Text style={styles.courseTopic}>
          Acesso a um mercado específico
        </Text>
        <Text style={styles.courseDescription}>
          Há uma demanda crescente por profissionais capazes de resolver problemas de software em smartphones. Este curso abre portas
        para oportunidades de emprego em lojas de reparo, empresas de telefonia e até mesmo empreendimentos próprios, atendendo a uma demanda cada vez maior por especialistas
        em software de dispositivos móveis.
        </Text>
        <Text style={styles.courseTopic}>
        Economia de custos para os usuários finais
        </Text>
        <Text style={styles.courseDescription}>
          Com a capacidade de resolver problemas de software, desbloquear e restaurar dispositivos brickados, os usuários finais 
        podem economizar significativamente em custos de reparo ou troca de aparelhos, tendo a capacidade de resolver muitos problemas por conta própria.
        </Text>
        <Text style={styles.courseTopic}>
        Exploração de possibilidades de personalização
        </Text>
        <Text style={styles.courseDescription}>
          Além de resolver problemas, o conhecimento em software de smartphones oferece a chance de personalizar e otimizar a
        experiência do usuário. Isso inclui ajustes de desempenho, personalização de interface e a capacidade de instalar aplicativos que vão além das restrições convencionais
        do sistema operacional.
        </Text>
      </ScrollView>

      {/* Botão para se inscrever */}
      <View style={styles.buttonContainer}>
        <Button
          title="Inscrever-se"
          onPress={handleInscricaoClick}
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
  courseTopic: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  courseDescription: {
    padding: 15,
    textAlign: 'center',
    fontSize: 20
  },
  buttonContainer: {
    margin: 10,
    paddingBottom: 10
  },
  magnify: {
    display: 'none',
  },
});

export default CursoSoftwareScreen;
