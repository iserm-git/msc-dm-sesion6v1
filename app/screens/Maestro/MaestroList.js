import React, { useState } from "react";
import { StyleSheet, View, Text, SectionList, SafeAreaView } from "react-native";
import Constants from "expo-constants";


export default function MaestroList() {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
}

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const DATA = [
    {
        title: "ISC",
        data: ["Alberto Diaz", "Ana Segundo", "Roberto Suárez", "Antonio Suárez"]
    },
    {
        title: "TICS",
        data: ["Claudia Baeza", "Ricargo García", "Bruno Barboza", "Alicia Linares"]
    },
    {
        title: "ELECT",
        data: ["José Jorge Rodríguez", "Francisco Parra", "Javier Barajas", "José Carlos Campos"]
    },
];

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
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#000fff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
})
