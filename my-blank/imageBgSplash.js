import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ActivityIndicator } from "react-native";

export default function App(){
    const [cargando, setCargando] = useState(false);
    const [datos, setDatos] = useState('');

    const simularCarga = () =>{
        setCargando(false);
        setDatos('');

        setTimeout(()=>{
            setCargando(false);
            setDatos('Datos cargados correctamente');
        }, 8000);
    };

    return(
        <View style={styles.container}>
            <Text>ActivityIndicator</Text>
            <Button title="Cargar Datos" onPress={simularCarga}/>
            {cargando && (
                <ActivityIndicator/>
            )}
            {datos !== '' && <Text>{datos}</Text>}
            <StatusBar style="auto"/>
        </View> 
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",

    },

});