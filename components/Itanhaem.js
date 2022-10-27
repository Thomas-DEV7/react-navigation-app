
import * as React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';


export default function Mongagua() {
  return (
    <View style={styles.container}>
            <Text style={styles.title}>Seja bem-vindo!</Text>
            <Text style={styles.subtitle}>Itanhaém - SP</Text>
            

            <Image
                style={styles.foto}
                source={{
                    uri: 'https://www2.itanhaem.sp.gov.br/wp-content/uploads/2019/02/balneabilidade_cortada.jpg'
                }}/>

    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        
    },
    foto:{
        height: 200,
        width: "100%"
    },
    title:{
        fontSize: 30,
        margin: 20
    },
    subtitle:{
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'lightblue',
        color: 'white',
        
    }
})