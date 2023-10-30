import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, Button, Linking } from 'react-native';
import { IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const CursoIniScreen = ({ navigation }) => {
  const bannerImage = require('../img/image1.png'); // Certifique-se de substituir 'nome_da_imagem.jpg' pelo nome real da sua imagem
  const appBarImage = require('../img/appbar_image.png'); // Certifique-se de substituir 'appBarImage.png' pelo nome real da sua imagem
  const handleVoltarClick = () => {
    navigation.goBack();
  };

  const handleInscricaoClick = () => {
    Linking.openURL('https://api.whatsapp.com/send?phone=+5561996951055&text=Quero%20me%20inscrever%20no%20curso.');
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
        Montar uma assistência técnica em smartphone é uma excelente oportunidade de negócio pra quem tem o sonho de montar o seu próprio negócio ou quer uma profissão rentável isso  porque nenhuma atividade humana hoje está isenta do uso do smartphone e esses pequenos aparelhos são muito fáceis de estragar.  
        </Text>
        <Text style={styles.courseDescription}>
        Baixo investimento inicial e prazo curto de retorno do investimento: hoje para se montar uma assistência técnica em smartphone o maior ativo é o conhecimento técnico e prestar serviços sempre foi  um bom negócio além disso o prazo médio para retorno total do investimento é muito curto em relação a outros negócios.
        </Text>
        <Text style= {styles.courseDescription}>
        Alta demanda: Com a popularização dos smartphones e a grande quantidade de pessoas que possui um dispositivo móvel a procura por serviços de assistência técnica tem aumentado consideravelmente isso faz com que um profissional bem qualificado tenha grande potencial de sucesso.
        </Text>
        <Text style= {styles.courseDescription}>
        Fidelização: quando uma pessoa encontra um serviço de qualidade em assistência técnica para o seu smartphone é muito provável que ela retorne em caso de necessidade e ainda indique para outras pessoas gerando assim uma rede de clientes fiéis.
        </Text>
        <Text style= {styles.courseDescription}>
        Margem de lucro e diversificação de serviços: a margem de lucro em serviços de assistência técnica é bastante atrativa podendo gerar uma boa rentabilidade e além disso a possibilidade de venda de acessórios e produtos complementares aumentam o faturamento.
        
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
