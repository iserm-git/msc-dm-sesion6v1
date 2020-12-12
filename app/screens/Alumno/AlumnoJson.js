import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import alumnosJson from "../../../alumnos.json"


export default function AlumnoJson() {
    return (
        <View style={styles.container} >
            <FlatList
                data={alumnosJson}
                renderItem={({ item }) => <Text style={styles.item}>[{item.noControl}]{item.name}</Text>}
                keyExtractor={item => String(item.id)}
            />
        </View >
    );
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 14,
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
})