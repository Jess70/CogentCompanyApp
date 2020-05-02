import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react'
import image from '../assets/rest.jpg'
import { Ionicons } from '@expo/vector-icons';
export default function App({navigation}) {
    return (
      <ImageBackground source={image} style={styles.main}>
      <View styles={styles.components}>
        <View style={styles.AppBar}>
            <Ionicons name="ios-menu" size={32} color="white"  
            onPress={() => {navigation.openDrawer()}}/>
            <View style={{marginTop:5,opacity: 0.8}}>
            <Text style={{ fontWeight:'bold', fontSize:20,}}>                    Edit Profile</Text>
            </View>     
      </View>
          <View style={styles.Input}>
              <View style={styles.card}>
                 <Text style={{fontWeight:'bold'}}>Name</Text>
              </View>
              <View style={styles.card}>
                <Text style={{fontWeight:'bold'}}>Email</Text>
              </View>
              <View style={styles.card}>
                <Text style={{fontWeight:'bold'}}>Gender</Text>
              </View>
              <View style={styles.card}>
                <Text style={{fontWeight:'bold'}}>Address</Text>
              </View>
              <View style={styles.card}>
                <Text style={{fontWeight:'bold'}}>Date Of Birth</Text>
              </View>
              <View style={styles.card}>
                <Text style={{fontWeight:'bold'}}>Years Of Experience</Text>
              </View>        
          </View>
          <TouchableOpacity style={styles.Button}  onPress={() => navigation.openDrawer()}>
             <Text style={styles.text}>Save Changes</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
    main:{
      height:700
    },
    components:{
      
    },
    Image:{
     borderRadius: 50
    },
    card:{

        backgroundColor : '#fff',
        borderRadius:6,
        marginTop:2,
        marginLeft: '5%',
        width: '90%',
        shadowColor : '#333',
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowRadius:2,
        elevation : 4,
        padding: 12,
    },
    AppBar:{
      marginLeft:15,
      marginTop:10,
      opacity:0.8,
      flexDirection:'row'
   },
   Input:{
     marginTop: 150
   },
   Button:{
    marginVertical: '20px',
    borderRadius:7,
    backgroundColor: '#1E90FF',
    height: 35,
    width: '40%',
    alignSelf:'center',
    padding:5,
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
    color:'white',
    fontSize:16,
    fontWeight:"500"


  }
  })