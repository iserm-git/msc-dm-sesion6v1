import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements"

export default function AlumnoAdd() {

    const [txtNombre, setNombre] = useState('Escribe el nombre ...')
    const [txtNoControl, setnoControl] = useState('Escribe el No. Control ...')
    const [txtCarrera, setCarrera] = useState('Escribe la carrera ...')
    const [btnEnviar, setEnviar] = useState('')

    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <View>
                <Text style={styles.textTitle}>Agregar Alumnos ...</Text>
                <Text>Nombre de alumnos</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtNombre}
                    onChangeText={n => setNombre(n)}
                />
                <Text>No de Control</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtNoControl}
                    onChangeText={nc => setnoControl(nc)}
                />
                <Text>Carrera</Text>
                <TextInput
                    style={styles.input}
                    placeholder={txtCarrera}
                    onChangeText={c => setCarrera(c)}
                />
                <Button
                    title="Agregar alumno"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        setEnviar(txtNoControl)
                    }}
                />
                <Text style={styles.textTitle}>DATOS DEL ALUMNO</Text>
                <Text>NOMBRE: {txtNombre}</Text>
                <Text>NO. CONTROL: {txtNoControl}</Text>
                <Text>CARRERA: {txtCarrera}</Text>
                <Text>TEXTO DE BOTON {btnEnviar}</Text>
            </View>
        </ScrollView>
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
    input: {
        height: 40,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        width: "90%"
    },
    btnStyle: {
        backgroundColor: "#00a680"
    },
    btnContainer: {
        width: "90%",
        marginBottom: 10
    }
})