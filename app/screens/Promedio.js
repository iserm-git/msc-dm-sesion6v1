import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert, Dimensions } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

export default function Promedio() {
  const [locacion, setLocacion] = useState({})
  const buscaLocation = async () => {
    const { status } = await Location.requestPermissionsAsync()
    if (status !== 'granted') {
      return Alert.alert('No tenemos los permisos necesarios para acceder a la location')
    }
    const location = await Location.getCurrentPositionAsync({})
    setLocacion(location)
  }


  useEffect(() => {
    buscaLocation()
  })
  return (
    <View style={styles.container}>
      <MapView style={styles.map} >
        {locacion.coords
          ? <Marker
            coordinate={locacion.coords}
            title="Titulo"
            description="Desc del mark"
          />
          : null
        }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22,
  },

});
