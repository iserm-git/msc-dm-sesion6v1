import React, { useState } from "react";
import { StyleSheet, View, Text, SectionList, SafeAreaView } from "react-native";
import Constants from "expo-constants";


export default function MaestroHeader() {
    return (
        <View>
            <Text style={styles.textTitle}>Maestros</Text>
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
