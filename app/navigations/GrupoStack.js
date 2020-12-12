import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Grupos from "../screens/Grupo/Grupo";
import GruposAdd from "../screens/Grupo/GrupoAdd";
import GruposDet from "../screens/Grupo/GrupoDet";

const Stack = createStackNavigator();

export default function AlumnosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="grupos"
        component={Grupos}
        options={{ title: "Grupos" }}
      />
      <Stack.Screen
        name="grupos-add"
        component={GruposAdd}
        options={{ title: "Agregar Grupos" }}
      />
      <Stack.Screen
        name="grupos-det"
        component={GruposDet}
        options={{ title: "Detalle de Grupos" }}
      />
    </Stack.Navigator>
  );
}
