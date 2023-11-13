import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Linking, ScrollView, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { AppBar, IconButton } from '@react-native-material/core';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';

const Stack = createStackNavigator();

function formatTelefone(telefone) {
  return telefone.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2 - $3');
}

function formatDate(data) {
  return data.replace(/\D/g, '').replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="caminho_da_home">
        <Stack.Screen name="caminho_da_home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function HomeScreen() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [curso, setCurso] = useState('');

  const handleVoltarClick = () => {
    navigation.goBack();
  };

  const handleInscricaoPress = () => {
    Alert.alert(
      'Confirmação',
      `Olá ${nome}! Você está sendo redirecionado para o WhatsApp para mais informações sobre a inscrição. \n\nDeseja Continuar?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        { text: 'Continuar', onPress: () => abrirWhatsApp() },
      ],
      { cancelable: false }
    );
  };

  const abrirWhatsApp = () => {
    const mensagem = `Olá! Meu nome é ${nome}, gostaria de mais informações sobre o ${curso} e inscrição.`;
    Linking.openURL(`https://api.whatsapp.com/send?phone=+556133515476&text=${mensagem}`);
  };

  const appBarProps = {
    style: { backgroundColor: '#0CC1EE', height: 80 },
    title: (
      <View style={{ alignItems: 'center', paddingTop: 100, flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
        <Image
          source={require('../img/appbar_image.png')}
          style={{ width: 200, height: 50, resizeMode: 'contain', marginRight: 80 }}
          resizeMode="contain"
        />
        <IconButton icon={(props) => <Icon name="arrow-left" {...props} style={{ marginLeft: 10 }} />} onPress={handleVoltarClick} />
      </View>
    ),
  };

  const dataSelectList = [
    { key: '1', value: 'Curso Iniciante Mobile' },
    { key: '2', value: 'Curso Intermediário Mobile' },
    { key: '3', value: 'Curso de Software Mobile' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <AppBar {...appBarProps} />

      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Text>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Mark"
          onChangeText={setNome}
          value={nome}
        />

        <Text>Sobrenome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Bryan"
          onChangeText={setSobrenome}
          value={sobrenome}
        />

        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: name@domain.com"
          onChangeText={setEmail}
          value={email}
        />

        <Text>Celular:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: (XX) XXXXX - XXXX"
          onChangeText={(text) => {
            const formattedPhoneNumber = formatTelefone(text);
            setCelular(formattedPhoneNumber);
          }}
          value={celular}
        />

        <Text>Data de Nascimento:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 10/05/2000"
          onChangeText={(text) => {
            const formattedDate = formatDate(text);
            setDataNascimento(formattedDate);
          }}
          value={dataNascimento}
        />

        <Text>Curso</Text>
        <SelectList
          setSelected={(val) => setCurso(val)}
          data={dataSelectList}
          save="value"
          style={styles.input}
        />
      </ScrollView>

      <View style={styles.scrollbtn}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleInscricaoPress}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>Inscreva-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  input: {
    alignSelf: 'stretch',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#00FF4C',
    paddingVertical: 10,
    paddingHorizontal: 1,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 5)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 5,
  },
  scrollbtn: {
    position: 'flex',
    bottom: 1,
    paddingTop: 10,
    margin: 20,
  }
};
