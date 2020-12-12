import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TextInput, Dimensions, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { startLocationUpdatesAsync } from "expo-location";

export default function MaestroAdd() {

  const [txtNombre, setNombre] = useState('Nombre')
  const [txtCarrera, setCarrera] = useState('Carrera')
  const [txtEmail, setEmail] = useState('Email')
  const [btnEnviar, setEnviar] = useState('')


  return (
    <View style={styles.viewBody}>
      <Text style={styles.textTitle}>AGREGAR MAESTRO</Text>
      <Text>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder={txtNombre}
        onChangeText={n => setNombre(n)}
      />
      <Text>Carrera</Text>
      <TextInput
        style={styles.input}
        placeholder={txtCarrera}
        onChangeText={c => setCarrera(c)}
      />
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder={txtEmail}
        onChangeText={e => setEmail(e)}
      />
      <Button onPress={() => {
        setEnviar(txtNombre)
      }}
        title="Aceptar"
      />
      <Text style={styles.textTitle}>INFORMACIÓN</Text>
      <Text>Nombre:{txtNombre}</Text>
      <Text>Carrera:{txtCarrera}</Text>
      <Text>Email:{txtEmail}</Text>
      <Text>Texto con click:{btnEnviar}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '90%'
  }
})
