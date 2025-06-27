import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Switch, Alert, StyleSheet, Image, ImageBackground, ActivityIndicator } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const handleRegistro = () => {
    if (!nombre || !correo) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }
    if (!aceptaTerminos) {
      Alert.alert('Términos no aceptados', 'Debes aceptar los términos y condiciones.');
      return;
    }
    Alert.alert('Registro exitoso', `Nombre: ${nombre}\nEmail: ${correo}`);
  };

  if (loading) {
    return (
      <View style={styles.splash}>
        <Image
          source={require('./assets/logo.jpg')} // <-- usa tu logo aquí
          style={styles.logo}
        />
        <Text style={styles.splashText}>Cargando...</Text>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Registro de Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          placeholderTextColor="#ccc"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#ccc"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Aceptar términos y condiciones</Text>
          <Switch
            value={aceptaTerminos}
            onValueChange={setAceptaTerminos}
            thumbColor={aceptaTerminos ? '#0f0' : '#888'}
          />
        </View>

        <Text style={styles.botonTexto} onPress={handleRegistro}>
          Registrarse
        </Text>
      </View>
    </ImageBackground>
  );
}

// Estilos
const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
  },

  splashText: {
    color: 'white',
    fontSize: 24,
    marginTop: 15,
  },

  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  background: {
    flex: 1,
    justifyContent: 'center',
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },

  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#fff',
    color: 'white',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
  },

  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  switchText: {
    color: 'white',
    fontSize: 16,
  },

  botonTexto: {
    color: '#3399ff',
    fontSize: 18,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
