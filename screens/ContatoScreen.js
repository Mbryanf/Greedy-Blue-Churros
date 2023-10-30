import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Linking } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { AppBar, IconButton } from "@react-native-material/core"; // Correção na importação
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons"; // Correção na importação

const Stack = createStackNavigator();

function formatTelefone(Telefone) {
  const cleanedNumeroTelefone = Telefone.replace(/\D/g, '');
  const formattedNumeroTelefone = `(${cleanedNumeroTelefone.substring(0, 2)}) ${cleanedNumeroTelefone.substring(2, 7)} - ${cleanedNumeroTelefone.substring(7, 11)}`;
  return formattedNumeroTelefone;
}

function formatDate(data) {
  const cleanedData = data.replace(/\D/g, '');
  const formattedData = `${cleanedData.substring(0, 2)}/${cleanedData.substring(2, 4)}/${cleanedData.substring(4, 8)}`;
  return formattedData;
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
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleVoltarClick = () => {
    navigation.goBack();
  }

  const handleInscricaoPress = () => {
    const mensagem = `Nome: ${nome}%0AEmail: ${email}%0ACelular: ${celular}%0AData de Nascimento: ${dataNascimento}`;
    Linking.openURL(`https://api.whatsapp.com/send?phone=+5561996951055&text=${mensagem}`);
  };

  const appBarProps = {
    style: { backgroundColor: "#0CC1EE", height: 80 },
    title: (
      <View style={{ alignItems: 'center', paddingTop: 100, flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
        <Image
          source={require('../img/appbar_image.png')}
          style={{ width: 200, height: 50, resizeMode: 'contain', marginRight: 80 }}
          resizeMode="contain"
        />
        <IconButton icon={(props) => <Icon name="arrow-left" {...props} style={{ marginLeft: 10 }} />} onPress={handleVoltarClick} />
      </View>
    ),
  };

  return (
    <View>
      <AppBar {...appBarProps} />

      {/* Conteúdo da página */}
      <View style={{ padding: 16 }}>
        <Text>Nome:</Text>
        <TextInput
          style={{
            width: 365,
            height: 40,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'gray',
            paddingLeft: 10,
            marginBottom: 16,
          }}
          placeholder="Ex: Mark Bryan"
          onChangeText={setNome}
          value={nome}
        />

        <Text>Email:</Text>
        <TextInput
          style={{
            width: 365,
            height: 40,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'gray',
            paddingLeft: 10,
            marginBottom: 16,
          }}
          placeholder="Ex: name@domain.com"
          onChangeText={setEmail}
          value={email}
        />

        <Text>Celular:</Text>
        <TextInput
          style={{
            width: 365,
            height: 40,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'gray',
            paddingLeft: 10,
            marginBottom: 16,
          }}
          placeholder="Ex: (XX) XXXXX - XXXX"
          onChangeText={(text) => {
            // Formata o número de telefone enquanto o usuário digita
            const formattedPhoneNumber = formatTelefone(text);
            setCelular(formattedPhoneNumber);
          }}
          value={celular}
        />

        <Text>Data de Nascimento:</Text>
        <TextInput
          style={{
            width: 365,
            height: 40,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'gray',
            paddingLeft: 10,
            marginBottom: 16,
          }}
          placeholder="Ex: 10/05/2000"
          onChangeText={(text) => {
            // Formata a data conforme necessário
            const formattedDate = formatDate(text);
            setDataNascimento(formattedDate);
          }}
          value={dataNascimento}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "rgb(13, 192, 239)",
            paddingVertical: 10,
            paddingHorizontal: 125,
            borderRadius: 30,
            alignSelf: "center",
            marginTop: 20,
          }}
          onPress={handleInscricaoPress}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Inscreva-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
