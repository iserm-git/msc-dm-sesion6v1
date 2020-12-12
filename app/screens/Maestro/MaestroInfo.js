import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { startLocationUpdatesAsync } from "expo-location";

export default function MaestroAdd() {



  return (
    <View style={styles.viewBody}>
      <Text style={styles.textTitle}>DETALLE MAESTRO</Text>
      <FlatList
        data={maestros}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
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
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
})

const maestros = [
  {
    key: '1',
    name: "Alberto"
  },
  {
    key: '2',
    name: "Bruno"
  },
  {
    key: '3',
    name: "Ricardo"
  },
  {
    key: '4',
    name: "Roberto"
  }
];
