import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Maestros from "../screens/Maestro/Maestro";
import MaestrosInfo from "../screens/Maestro/MaestroInfo";
import MaestrosAdd from "../screens/Maestro/MaestroAdd";
import MaestrosList from "../screens/Maestro/MaestroList";

const Stack = createStackNavigator();

export default function MaestroStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="maestros"
        component={Maestros}
        options={{ title: "Maestros" }}
      />
      <Stack.Screen
        name="maestros-info"
        component={MaestrosInfo}
        options={{ title: "Detalle de maestros" }}
      />
      <Stack.Screen
        name="maestros-add"
        component={MaestrosAdd}
        options={{ title: "Agregar maestro" }}
      />
      <Stack.Screen
        name="maestros-list"
        component={MaestrosList}
        options={{ title: "Lista de maestros" }}
      />
    </Stack.Navigator>
  );
}
