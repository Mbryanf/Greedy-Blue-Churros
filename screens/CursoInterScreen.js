import React from "react";
import { View, Text, Image } from 'react-native';

export default function CursoInterScreen() {
  return (
    <View>
      <Image source={require('../img/image2.png')} />
      <Text>Tela do Curso Intermediário Mobile</Text>
      {/* Adicione o conteúdo da tela aqui */}
    </View>
  );
}
