import React from 'react';
import { StyleSheet, View, Button, ImageBackground,Text, TouchableOpacity} from 'react-native';
import Image from '../assets/Background.jpg'


export default function Home({navigation}) {
  return (
    <ImageBackground source={Image} style={styles.image} >
    <View style={styles.container}>
      
 
        <TouchableOpacity style={styles.Button}  onPress={() => navigation.navigate('SignIn')}>
             <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('SignUp')}>
             <Text style={styles.text}>SignUp</Text>
        </TouchableOpacity>

        <Text style={styles.font}>Developer : Jayesh</Text>
    </View>
    
    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 400,
    
  },
  font:{
    fontWeight: 'bold',
    fontSize:20,
    marginTop:30
  },

  image: {
    height: '100%'
  },
  Button:{
    marginVertical: '20px',
    borderRadius:7,
    backgroundColor: 'white',
    color: 'white',
    height: 40,
    width: '60%',
    alignSelf:'center',
    padding:5,
    borderRadius:20,
    shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
  },
  text:{
    textAlign: 'center',
    color:'Black',
    fontSize:20,
    fontWeight:"bold"


  }
});

