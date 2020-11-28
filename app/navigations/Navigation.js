import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Alumnos from "../screens/Alumno";
import Grupos from "../screens/Grupo";
import Maestros from "../screens/Maestro";
import Materias from "../screens/Materia";
import Promedios from "../screens/Promedio";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="alumnos"
          component={Alumnos}
          options={{ title: "Alumnos" }}
        />
        <Tab.Screen
          name="grupos"
          component={Grupos}
          options={{ title: "Grupos" }}
        />
        <Tab.Screen
          name="maestros"
          component={Maestros}
          options={{ title: "Maestros" }}
        />
        <Tab.Screen
          name="materias"
          component={Materias}
          options={{ title: "Materias" }}
        />
        <Tab.Screen
          name="promedios"
          component={Promedios}
          options={{ title: "Promedios" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
