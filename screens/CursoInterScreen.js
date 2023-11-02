import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, Button, Linking } from 'react-native';
import { IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const CursoInterScreen = ({ navigation }) => {
  const bannerImage = require('../img/image3.png'); // Certifique-se de substituir 'nome_da_imagem.jpg' pelo nome real da sua imagem
  const appBarImage = require('../img/appbar_image.png'); // Certifique-se de substituir 'appBarImage.png' pelo nome real da sua imagem
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
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.courseDescription}>
        Esse curso é indicado para o técnico que já faz manutenção básica e  não sabe  resolver defeitos  que exigem uma análise mais detalhada
        do circuito elétrico; Manuseio de ferramentas de bancada e troca de CI's
        </Text>
        <Text style={styles.courseDescription}>
        Aprofundamento de conhecimentos técnicos: O curso intermediário de manutenção de smartphones vai além dos conceitos básicos,
        proporcionando uma compreensão mais aprofundada dos componentes, circuitos e sistemas do aparelho. Isso permite a identificação
        e resolução de problemas mais complexos, preparando os alunos para lidar com situações desafiadoras.
        </Text>
        <Text style={styles.courseDescription}>
        Atualização sobre novas tecnologias e tendências: Com a rápida evolução da tecnologia, smartphones estão sempre recebendo atualizações
        e novos recursos. Um curso intermediário oferece informações atualizadas sobre os últimos avanços, novos modelos e as tendências da indústria,
        capacitando os alunos a lidar com as inovações mais recentes.
        </Text>
        <Text style= {styles.courseDescription}>
        Habilidades especializadas em reparos avançados: Ao passar por um curso intermediário, os alunos adquirem habilidades mais avançadas em reparos de
        hardware e software. Isso inclui soldagem, substituição de componentes específicos, diagnóstico de problemas mais complexos, e até mesmo a recuperação
        de dados em situações mais difíceis.
        </Text>
        <Text style= {styles.courseDescription}>
        Potencial de carreira e empreendedorismo: Com conhecimentos mais profundos, os formados no curso intermediário podem explorar oportunidades de trabalho em 
        empresas de assistência técnica, lojas de eletrônicos ou até mesmo iniciar seus próprios negócios de reparo de smartphones. Esse tipo de habilidade é altamente 
        valorizado no mercado.
        </Text>
        <Text style= {styles.courseDescription}>
        Resolução de problemas e economia pessoal: Ao compreender melhor como os smartphones funcionam, os alunos do curso intermediário podem resolver problemas em seus próprios 
        dispositivos, economizando tempo e dinheiro com reparos. Isso promove autonomia e evita depender exclusivamente de serviços técnicos externos.
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
    fontSize:25
  },
  buttonContainer: {
    margin: 10,
    paddingBottom: 10
  },
  magnify: {
    display: 'none',
  },
});

export default CursoInterScreen;
