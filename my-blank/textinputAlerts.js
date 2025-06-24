import React, {use, useState} from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, SafeAreaView, Platform } from "react-native";

const App = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const showAlert = () => {
        if (!name || !email || !password){
            if (Platform.OS === "web"){
                window.alert("Please, complete all requiered fields")
            }else{
                Alert.alert("Error", "Please, complete all requiered fields", [{text: "Ok"}])
            }
        }else{
            if (Platform.OS === "web"){
                window.alert(`Registered Successfully \n Name:${name} \n Email:${email}`);
                clearForm();
            }else{
                Alert.alert(
                    "Registered Successfully",
                    ` Name:${name} \n Email:${email}`,
                    [{text: "Ok", onPress:()=>clearForm()}]
                )
            }
        }
    };

    const clearForm = () =>{
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Type name</Text>
                <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName}></TextInput>
                <Text style={styles.title}>Type email</Text>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none"></TextInput>
                <Text style={styles.title}>Type password</Text>
                <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry></TextInput>
                <Text style={styles.title}>Type phone</Text>
                <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad"></TextInput>

                <Button title="Register" onPress={showAlert}></Button>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
  
    title:{
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center"
    },
  
    form:{
        backgroundColor: "#f5f5f5",
        padding: 20,
        borderRadius: 10
    },

    input:{
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "white",
    },

  });

  export default App;
  