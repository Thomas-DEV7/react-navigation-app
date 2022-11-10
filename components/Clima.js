import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Clima({route}) {
  const cidade = route.params.cidade;
  const id = route.params.id;
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const req = await fetch(
      `https://api.hgbrasil.com/weather?woeid=${id}`
    );
    const json = await req.json();

    

    setLoading(false)
  }, [])

 return (
   <View>
        <Text>Seja Bem Vindo</Text>

        <View>
            <Text>{cidade}</Text>
        </View>
    </View>
  );
}
