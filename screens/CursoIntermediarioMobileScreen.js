import React from "react";
import { View, Text, Image } from 'react-native';

export default function CursoIntermediarioMobileScreen() {
  return (
    <View>
      <Image source={require('./image2.png')} />
      <Text>Tela do Curso Intermediário Mobile</Text>
      {/* Adicione o conteúdo da tela aqui */}
    </View>
  );
}
