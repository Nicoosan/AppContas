import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  function soma(){
    const resultado = parseFloat(num1) + parseFloat(num2);
    alert ('O resultado é ' + resultado);
  }
  function subtrair(){
    const resultado = parseFloat(num1) - parseFloat(num2);
    alert ('O resultado é ' + resultado);
  }
  function multiplica(){
    const resultado = parseFloat(num1) * parseFloat(num2);
    alert ('O resultado é ' + resultado);
  }
  function divide(){
    const resultado = parseFloat(num1) / parseFloat(num2);
    alert ('O resultado é ' + resultado);
  }

  return (
    <View style={styles.container}>
     <Text style={styles.titulo}> soma de valores </Text>
     <TextInput 
     style= {styles.input0}
      keyboardType= 'numeric' 
      placeholder="Digite um número"
      onChangeText={(num1)=>setNum1(num1)}
      />

     <TextInput 
     style= {styles.input1}
      keyboardType= 'numeric' 
      placeholder="Digite um número"
      onChangeText={(num2)=>setNum2(num2)}
      />

     <TouchableOpacity style={styles.btn} onPress={soma}>
      <Text style={styles.titulobtn}>Somar</Text>
     </TouchableOpacity>

    <TouchableOpacity style={styles.btn} onPress={subtrair}>
      <Text style={styles.titulobtn}>Subtrair</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.btn} onPress={multiplica}>
      <Text style={styles.titulobtn}>Multiplicar</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.btn} onPress={divide}>
      <Text style={styles.titulobtn}>Dividir</Text>
     </TouchableOpacity>
    </View>

  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'ECF2FF',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input0:{
    backgroundColor: "#655DBB",
    borderRadius: 15,
    margin: 30,
    padding: 10,
    fontSize: 25
  },
  input1:{
    backgroundColor: "#655DBB",
    margin: 30,
    borderRadius: 15,
    fontSize: 25,
    padding: 10
  },
  btn:{
    alignItens:"center",
    backgroundColor:"#BFACE2",
    margin:10,
    borderRadius: 15,
    padding:5
  },
  titulobtn:{
    fontSize:18,
    color:"#fff"
  }

});



