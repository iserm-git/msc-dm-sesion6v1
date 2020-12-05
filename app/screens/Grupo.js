import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem, Icon } from "react-native-elements";

export default function Grupo() {
  return (
    <View>
      <Text style={styles.textTitle}>Grupos</Text>
      {list.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name={item.icon} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});

const list = [
  {
    title: "Appointments",
    icon: "av-timer"
  },
  {
    title: "Trips",
    icon: "flight-takeoff"
  }
];
