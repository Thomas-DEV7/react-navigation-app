
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        
            <Text style={styles.text}>Selecione a cidade:</Text>
        <View style={styles.bloco}>
            <TouchableOpacity
                style={styles.btn} 
                onPress={ ()=> navigation.navigate("Mongagua")}
                >
                <Text style={styles.textbtn}>Mongaguá</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={ ()=> navigation.navigate("Itanhaem")}
                style={styles.btn} 
                >
                <Text style={styles.textbtn}>Itanhaém</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={ ()=> navigation.navigate("Itanhaem")}
                style={styles.btn} 
                >
                <Text style={styles.textbtn}>--Em breve--</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={ ()=> navigation.navigate("Itanhaem")}
                style={styles.btn} 
                >
                <Text style={styles.textbtn}>--Em breve--</Text>
            </TouchableOpacity>

        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        margin: 20,
    },
    bloco:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
        backgroundColor: 'steelblue',
        height: 50,
        width: '80%',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center'
    },
    textbtn:{
        color: '#fff',
        fontSize: 20
    },
    text:{
        fontSize: 20,
        
    }
})