import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { ListItem, Icon } from "react-native-elements";

export default function Grupo() {

  return (
    <View style={styles.viewBtn}>
      {/* source={{ uri: 'https://source.unsplash.com/daily' }} */}
      {/* source={require('../../../assets/groups_people1.png')} */}
      {/* source={{ uri: 'https://source.unsplash.com/featured/?{student}' }} */}
      {/* source={{ uri: 'https://source.unsplash.com/featured/?group' }} */}
      <Image
        style={styles.photo}
        source={require('../../../assets/groups_people1.png')}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  photo: {
    height: 140,
    width: 140,
    marginBottom: 20,
    marginTop: 20
  },
  viewBtn: {
    flex: 6,
    alignItems: "center"
  }
});

