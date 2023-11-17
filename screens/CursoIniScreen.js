import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, Button, Linking } from 'react-native';
import { IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const CursoIniScreen = ({ navigation }) => {
  const bannerImage = require('../img/image1.png');
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
            style={{ width: 200, height: 50, resizeMode: 'contain', alignSelf: 'center', marginHorizontal: "auto", marginRight: "10%" }}
          />
        </View>
        <IconButton icon={<Icon name="magnify" style={styles.magnify} />} />
      </View>

      {/* Banner com a imagem do curso */}
      <Image
        style={styles.banner}
        source={bannerImage}
      />

      {/* Texto descritivo do curso em um ScrollView */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.courseDescription}>
          O nosso curso presencial é para você que tem pouca ou nenhuma experiencia na área de manutenção e deseja aprender para montar uma loja ou trabalhar em uma assistência
        </Text>
        <Text style={styles.courseTopic}>
          Motivos para fazer o curso iniciante de manunteção
        </Text>
        <Text style={styles.courseDescription}>
          Montar uma assistência técnica em smartphone é uma excelente oportunidade de negócio pra quem tem o sonho de montar o seu próprio negócio ou quer uma profissão rentável isso  porque nenhuma atividade humana hoje está isenta do uso do smartphone e esses pequenos aparelhos são muito fáceis de estragar.
        </Text>
        <Text style={styles.courseTopic}>
          Baixo investimento inicial e prazo curto de retorno do investimento
        </Text>
        <Text style={styles.courseDescription}>
          Hoje para se montar uma assistência técnica em smartphone o maior ativo é o conhecimento técnico e prestar serviços sempre foi  um bom negócio além disso o prazo médio para retorno total do investimento é muito curto em relação a outros negócios.
        </Text>
        <Text style={styles.courseTopic}>
          Alta demanda
        </Text>
        <Text style={styles.courseDescription}>
          Com a popularização dos smartphones e a grande quantidade de pessoas que possui um dispositivo móvel a procura por serviços de assistência técnica tem aumentado consideravelmente isso faz com que um profissional bem qualificado tenha grande potencial de sucesso.
        </Text>
        <Text style={styles.courseTopic}>
          Fidelização
        </Text>
        <Text style={styles.courseDescription}>
          Quando uma pessoa encontra um serviço de qualidade em assistência técnica para o seu smartphone é muito provável que ela retorne em caso de necessidade e ainda indique para outras pessoas gerando assim uma rede de clientes fiéis.
        </Text>
        <Text style={styles.courseTopic}>
          Margem de lucro e diversificação de serviços
        </Text>
        <Text style={styles.courseDescription}>
          A margem de lucro em serviços de assistência técnica é bastante atrativa podendo gerar uma boa rentabilidade e além disso a possibilidade de venda de acessórios e produtos complementares aumentam o faturamento.

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
    paddingLeft: 15,
    paddingRight: 15,
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

export default CursoIniScreen;
