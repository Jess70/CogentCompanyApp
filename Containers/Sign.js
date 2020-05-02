import React from 'react';
import { StyleSheet, Text, View, TextInput,ImageBackground, TouchableOpacity } from 'react-native';
import MyImage from '../assets/sign.jpg'

export default function Sign({navigation}) {
  return (
    <ImageBackground source={MyImage} style={styles.pic}>
    <View style={styles.container}>
        <Text style={{textAlign: 'center', fontWeight:'bold', fontSize:'20px'}}>Welcome</Text>
      <View >
        <View style={styles.spacing}>
            <TextInput type="text" placeholder="Your Email"></TextInput>
        </View>
        <View style={styles.spacing}>
            <TextInput type="password" placeholder="Password"></TextInput>
        </View>
        <TouchableOpacity style={styles.Button}  onPress={() => navigation.navigate('Drawer')}>
             <Text style={styles.text}>SignUp</Text>
        
        </TouchableOpacity>
        <Text style={{textAlign: "right", margin:10,fontWeight:'bold'}}>Forget Password?</Text>
        <Text style={{textAlign: "center", marginTop:20,fontWeight:'bold'}}>Don't have an account? Create New!</Text>
        
      </View>
      
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  pic:{
   height:'100%'  
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  spacing:{
    marginVertical: '15px',
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 2,
    padding: 10,
    borderRadius: 7,
    width : 250
  },
  Button:{
    marginVertical: '20px',
    borderRadius:7,
    backgroundColor: '#1E90FF',
    height: 40,
    width: '90%',
    alignSelf:'center',
    padding:5,
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

elevation: 13,
  },
  text:{
    textAlign: 'center',
    color:'white',
    fontSize:20,
    fontWeight:"bold"


  }
});
