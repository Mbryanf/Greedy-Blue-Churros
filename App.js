import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import ContatoScreen from './screens/ContatoScreen';
import CursoIniScreen from "./screens/CursoIniScreen";
import CursoInterScreen from "./screens/CursoInterScreen";
import CursoSoftwareScreen from "./screens/CursoSoftwareScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contato" component={ContatoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CursoIniciante" component={CursoIniScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CursoIntermediario" component={CursoInterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CursoSoftware" component={CursoSoftwareScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
