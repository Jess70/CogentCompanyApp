import React from 'react';
import { View , StyleSheet , ImageBackground, Text} from 'react-native';
import MyImage from '../assets/Graph.jpg'
import { Ionicons } from '@expo/vector-icons';


export default function Activity({navigation}) {
  return (
    <ImageBackground source={MyImage} style={styles.main}>
      <View style={styles.AppBar}>
            <Ionicons name="md-menu" size={32} color="white"  
            onPress={() => {navigation.openDrawer()}}/>
            <View style={{marginTop:5,opacity: 0.8}}>
            <Text style={{ fontWeight:'bold', fontSize:20,}}>                     Activity</Text>
            </View>
      </View>

    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  main:{
    height:'100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AppBar:{
    marginLeft:15,
    marginTop:10,
    opacity:0.8,
    flexDirection:'row'
 }
});

