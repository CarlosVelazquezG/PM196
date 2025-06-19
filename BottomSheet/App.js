import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [200, 400], []);

  const handleOpenSheet = useCallback(() => {
    console.log('Botón presionado');
    bottomSheetRef.current?.expand(); // Ahora sí debe funcionar
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Bottom Sheet Demo</Text>
        <Button title="Abrir Bottom Sheet" onPress={handleOpenSheet} />

        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
        >
          <View style={styles.sheetContent}>
            <Text style={styles.sheetText}>¡Hola! Este es un Bottom Sheet.</Text>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  sheetContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  sheetText: {
    fontSize: 16,
  },
});
