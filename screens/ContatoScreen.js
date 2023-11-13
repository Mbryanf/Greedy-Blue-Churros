import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Linking, Platform } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { AppBar, IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import { SelectList } from "react-native-dropdown-select-list";
import { SelectList } from 'react-native-dropdown-select-list'

const Stack = createStackNavigator();

function formatTelefone(telefone) {
  const cleanedNumeroTelefone = telefone.replace(/\D/g, '');
  const formattedNumeroTelefone = `(${cleanedNumeroTelefone.substring(0, 2)}) ${cleanedNumeroTelefone.substring(2, 7)} - ${cleanedNumeroTelefone.substring(7, 11)}`;
  return formattedNumeroTelefone;
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
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [curso, setCurso] = React.useState("");
  const data = [
    {key:'1', value:'Curso Iniciante mobile', disabled:true},
    {key:'2', value:'Curso Intermediário Mobile'},
    {key:'3', value:'Curso de Software Mobile'},
  ]

  const handleVoltarClick = () => {
    navigation.goBack();
  };

  const handleInscricaoPress = () => {
    const mensagem = `Olá! Meu nome é ${nome}, gostaria de mais informações sobre o ${curso} e inscrição.  `;
    Linking.openURL(`https://api.whatsapp.com/send?phone=+556133515476&text=${mensagem}`);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDataNascimento(selectedDate);
    }
  };

  const renderDatePicker = () => {
    if (Platform.OS === 'ios') {
      return (
        <DateTimePicker
          value={dataNascimento}
          mode="date"
          display="spinner"
          onChange={handleDateChange}
        />
      );
    } else {
      return (
        <DateTimePicker
          value={dataNascimento}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      );
    }
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

  const dataSelectList = [
    { key: '1', value: 'Curso Iniciante Mobile'},
    { key: '2', value: 'Curso Intermediário Mobile' },
    { key: '3', value: 'Curso de Software Mobile' },
  ];

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
            borderRadius: 10,
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
            borderRadius: 10,
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
            borderRadius: 10,
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
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={{
            width: 365,
            height: 40,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'gray',
            paddingLeft: 10,
            justifyContent: 'center',
            marginBottom: 16,
          }}
        >
          <Text>{dataNascimento.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && renderDatePicker()}

        <Text>Curso</Text>
        <SelectList
          setSelected={(val) => setCurso(val)}
          data={dataSelectList}
          save="value"
        />

        <Text>Curso</Text>
        <SelectList
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
          
        

        <TouchableOpacity
          style={{
            backgroundColor: "#00FF4C",
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
