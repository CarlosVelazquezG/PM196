
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Platform } from 'react-native';

const showAlert = (message) => {
  if (Platform.OS === 'web') {
    window.alert(message);
  } else {
    Alert.alert('Alerta', message);
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Button Text</Text>

      <View style={styles.section}>
        <Text style={styles.description}>Botón básico</Text>
        <Button
          title="Presióname"
          onPress={() => showAlert("Botón presionado")}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>Botón con color</Text>
        <Button
          title="Botón de color"
          color="#f194ff"
          onPress={() => showAlert("Botón de color presionado")}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>Botón deshabilitado:</Text>
        <Button
          title="Deshabilitado"
          disabled
          onPress={() => showAlert('No funciona :(')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>Dos botones:</Text>
        <View style={styles.buttonRow}>
          <Button
            title="Izquierda"
            onPress={() => showAlert('Botón izquierdo presionado')}
          />
          <View style={styles.buttonSpacer} />
          <Button
            title="Derecha"
            onPress={() => showAlert('Botón derecho presionado')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#000000',
  },
  section: {
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonSpacer: {
    width: 10,
  },
});

/*
import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

const App = () => {
  const [activo, setActivo] = useState(false);

  const cambiarSwitch = () => {
    setActivo(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Activar Característica:</Text>

      <Switch
        onValueChange={cambiarSwitch}
        value={activo}
      />

      <Text style={styles.statusText}>
        Estado actual: {activo ? 'Activado' : 'Desactivado'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  statusText: {
    marginTop: 20,
    fontSize: 18,
    color: '#666',
  },
});

export default App;
*/

