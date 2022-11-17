import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Home({ navigation }) {

    return (
        <View style={styles.bloco}>
            <Text style={styles.titulo}>Seja Bem Vindo</Text>
            <Text style={styles.subtitulo}>Escolha uma cidade para ver sua temperatura.</Text>

            <View style={styles.areaBotoes}>
                <TouchableOpacity style={[styles.botao, { marginLeft: 0 }]}
                    onPress={() => navigation.navigate("Clima", {cidade: "Santos", id: 455991})}>
                    <Text style={styles.txtBotao}>SANTOS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}
                    onPress={() => navigation.navigate("Clima", {cidade: "São Vicente", id: 451401})}>
                    <Text style={styles.txtBotao}>SÃO VICENTE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}
                    onPress={() => navigation.navigate("Clima", {cidade: "Praia Grande", id: 455987})}>
                    <Text style={styles.txtBotao}>PRAIA GRANDE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}
                    onPress={() => navigation.navigate("Clima", {cidade: "Mongaguá", id: 460161})}>
                    <Text style={styles.txtBotao}>MONGAGUÁ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botao, { marginRight: 0 }]}
                    onPress={() => navigation.navigate("Clima", {cidade: "Itanhaém", id: 456259})}>
                    <Text style={styles.txtBotao}>ITANHAÉM</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bloco: {
        paddingTop: 30,
        backgroundColor: "#8ecae6",
        flex: 1,
        alignItems: "center"
    },
    areaBotoes: {
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 30,
        
    },
    subtitulo: {
        textAlign: 'center',
        fontSize: 20
    },
    botao: {
        backgroundColor: 'orange',
        borderRadius: 5,
        width: 300,
        padding: 8,
        marginVertical: 10
    },
    txtBotao: {
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: "bold"
    }
})