import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Grupos from "../screens/Grupo";

const Stack = createStackNavigator();

export default function AlumnosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="grupos"
        component={Grupos}
        options={{ title: "Grupos" }}
      />
    </Stack.Navigator>
  );
}
