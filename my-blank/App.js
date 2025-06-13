import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react'

const Texto= ()=>{
  const [contenido, setContenido]=useState('Hola Mundo')
  const actualizarTexto=()=>{setContenido('Presionado')}
      return (
        <Text onPress={actualizarTexto}>{contenido}</Text>
      )
}

export default function App() {
  const [contBoton, setContBoton]=useState('Tócame')
  const actualizarBoton=()=>{setContBoton('Tocado')}
  return (

    <View style={styles.container}>
      <Texto></Texto>
      <StatusBar style="auto" />
      <Texto></Texto>
      <Button title={contBoton} onPress={actualizarBoton}></Button>
      <Texto></Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
