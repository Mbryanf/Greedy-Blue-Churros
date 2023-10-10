import React from "react";
import { View, Text, Image } from 'react-native';

export default function CursoInicianteMobileScreen() {
  return (
    <View>
      <Image source={require('./image1.png')} />
      <Text>Tela do Curso Iniciante Mobile</Text>
      {/* Adicione o conteúdo da tela aqui */}
    </View>
  );
}
