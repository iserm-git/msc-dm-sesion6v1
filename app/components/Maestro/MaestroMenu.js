import React, { useState } from "react";
import { Button, StyleSheet, View, Text, SectionList, SafeAreaView } from "react-native";
import Constants from "expo-constants";


export default function MaestroMenu() {
    return (
        <View style={styles.viewBtn}>
            <Button
                title="Agregar maestro"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                onPress={() => navigation.navigate("maestros-add")}
            />
            <Button
                title="Maestro Lista 1"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                onPress={() => navigation.navigate("maestros-info")}
            />
            <Button
                title="Maestro Lista 2"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                onPress={() => navigation.navigate("maestros-list")}
            />
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

