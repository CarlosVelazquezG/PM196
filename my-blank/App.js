import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react'


const Texto=({style}) => {
  const [contenido,setContenido] = useState('Hola');
  const actualizarText=()=>{setContenido('toqueteado');}
     return (<Text  style={[styles.text,style]} onPress={actualizarText}> {contenido} </Text>) 
    }


export default function App() {
  const [contBoton, setContBoton]=useState('Tócame')
  const actualizarBoton=()=>{setContBoton('Tocado')}
  return (

    <View style={styles.container}>
      <Texto style={styles.red}></Texto>
      <StatusBar style="auto" />
      <Texto style={styles.blue}></Texto>
      <Button title={contBoton} onPress={actualizarBoton}></Button>
      <Texto style={styles.green}></Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column', 
    justifyContent: 'space-evenly',
  },

  text:{
    color: 'white',
    fontSize: 27,
    width: 100,
    height: 100,
  },

  red:{backgroundColor: 'red',},
  green:{backgroundColor: 'green',},
  blue:{backgroundColor: 'blue',},
});
