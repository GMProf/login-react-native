import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image } from 'react-native';
import styles from './style';

export default function App() {
  const [ usuario, setUsuario ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ logado, setLogado ] = useState(false);

  function fazerLogin(){
    if (usuario === 'Gabriel' && senha === '123'){
      setLogado(true)
    } else {
      alert('Usuário ou senha incorretos!!')
    }
  }
  if(!logado){
    return (
      <View style={styles.container}>
          <Image
            source={{
              uri: 'https://www.svgrepo.com/show/333590/react.svg'
            }}
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            placeholder='Usuário'
            value={usuario}
            onChangeText={setUsuario} 
          />
          <TextInput 
            style={styles.input}
            placeholder='Senha'
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
          <Button title='Fazer Login' onPress={fazerLogin}/>
      </View>
    );
  }
   return (
    <View style={styles.container}>
      <Text style={styles.bemVindo}>Sistema logado com sucesso!!</Text>
      <Text style={styles.nomeTopo}>Seja bem-vindo, { usuario }</Text>
    </View>
  );
}
