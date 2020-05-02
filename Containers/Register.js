import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, ImageBackground} from 'react-native';
import image from '../assets/sign.jpg'

export default function Sign({navigation}) {

  return (
    <ImageBackground source={image} style={{height:'100%'}}>
    <View style={styles.container}>
      <View >
        <Text style={{textAlign: 'center', fontWeight:'bold', fontSize:'20px'}}>Create Account</Text>
        <View style={styles.spacing}>
            <TextInput type="text" placeholder="User Name"></TextInput>
        </View>
        <View style={styles.spacing}>
            <TextInput type="text" placeholder="Your Email"></TextInput>
        </View>
        <View style={styles.spacing}>
            <TextInput type="text" placeholder="Mobile Number"></TextInput>
        </View>
        <View style={styles.spacing}>
            <TextInput type="password" placeholder="Password"></TextInput>
        </View>
        <TouchableOpacity style={styles.Button}  onPress={() => navigation.navigate('Drawer')}>
             <Text style={styles.text}>SignIn</Text>
        </TouchableOpacity>

        
        
      </View>
      
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  spacing:{
    marginVertical: '10px',
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
