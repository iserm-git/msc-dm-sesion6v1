import React from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function AlumnoDet() {
    return (
        <View style={styles.center}>
            <ImageBackground
                style={styles.photo}
                source={{ uri: 'https://source.unsplash.com/featured/?{student}' }}
            >
                <Text style={styles.textTitle}>ESTUDIANTE</Text>
            </ImageBackground>

        </View>
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
        fontSize: 22,
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    photo: {
        height: 700,
        width: 330,
        marginBottom: 20,
        marginTop: 20
    },
    textTitle: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: '#FFF'
    }
})