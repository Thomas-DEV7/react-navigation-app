import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Clima({route}) {
  const cidade = route.params.cidade;
  const id = route.params.id;
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const request = async () => {
      const req = await fetch(
        `https://api.hgbrasil.com/weather?woeid=${id}&array_limit=10&fields=only_results,temp,city_name,forecast,max,min,date&key=679f4f5a`
      );
      const json = await req.json();
    
      console.log(json);
    }

    request();

    

    setLoading(false)
  }, [])

 return (
   <View style={styles.bloco}>
        <View>
            <Text>{cidade}</Text>
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
      fontSize: 30
  },
  subtitulo: {
      textAlign: 'center',
      fontSize: 20
  },
  botao: {
      backgroundColor: '#023047',
      borderRadius: 5,
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
