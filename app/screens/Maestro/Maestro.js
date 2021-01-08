import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import MaestroHeader from "../../components/Maestro/MaestroHeader";
import MaestroMenu from "../../components/Maestro/MaestroMenu";

export default function Maestro() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <MaestroHeader />
      <MaestroMenu />

      {list.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </ScrollView>
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
  btnStyle: {
    backgroundColor: "#00a680",
    marginBottom: 10
  },
  btnContainer: {
    width: "70%"
  },
  viewBtn: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

const list = [
  {
    title: "Maestro 1",
    icon: "account"
  },
  {
    title: "Maestro 2",
    icon: "account-outline"
  },
  {
    title: "Maestro 3",
    icon: "account"
  },
  {
    title: "Maestro 4",
    icon: "account-outline"
  }
];
