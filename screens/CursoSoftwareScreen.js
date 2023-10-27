import React from "react";
import { View, Text, Image } from 'react-native';

export default function CursoSoftwareScreen() {
  return (
    <View>
      <Image source={require('../img/image3.png')} />
      <Text>Tela do Curso de Software Mobile</Text>
      {/* Adicione o conteúdo da tela aqui */}
    </View>
  );
}
