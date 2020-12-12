import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default function ListGroupCarrera() {
    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 16,
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    section: {
        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor: '#eee',
        paddingTop: 2,
        paddingLeft: 10,
        paddingBottom: 10
    },
    textTitle: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
})

const DATA = [
    {
        title: 'Sistema Computacionales',
        data: [
            { key: '1', name: 'Septimo - A' },
            { key: '2', name: 'Septimo - B' },
            { key: '3', name: 'Quinto - A' },
            { key: '4', name: 'Quinto - B' },
            { key: '5', name: 'Tercero - A' },
            { key: '6', name: 'Tercero - B' },
            { key: '7', name: 'Primero - A' },
            { key: '8', name: 'Primero - B' }
        ]
    },
    {
        title: 'Tecnologías de Información y Telecomunicaciones',
        data: [
            { key: '9', name: 'Septimo - A' },
            { key: '10', name: 'Quinto - A' },
            { key: '11', name: 'Tercero - A' },
            { key: '12', name: 'Primero - A' }
        ]
    },
    {
        title: 'Ingeniería Industrial',
        data: [
            { key: '13', name: 'Septimo - A' },
            { key: '14', name: 'Septimo - B' },
            { key: '15', name: 'Septimo - C' },
            { key: '16', name: 'Septimo - D' },
            { key: '17', name: 'Quinto - A' },
            { key: '18', name: 'Quinto - B' },
            { key: '19', name: 'Quinto - C' },
            { key: '20', name: 'Quinto - D' },
            { key: '21', name: 'Tercero - A' },
            { key: '22', name: 'Tercero - B' },
            { key: '23', name: 'Tercero - C' },
            { key: '24', name: 'Tercero - D' },
            { key: '25', name: 'Primero - A' },
            { key: '26', name: 'Primero - B' },
            { key: '27', name: 'Primero - C' },
            { key: '28', name: 'Primero - D' }
        ]
    }
]