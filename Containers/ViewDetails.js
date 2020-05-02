import React from 'react';
import { View, Text, Button,StyleSheet,ImageBackground, TouchableOpacity} from 'react-native';
import image from '../assets/Home.jpg'
import { Ionicons } from '@expo/vector-icons';
class Details extends React.Component {
constructor(props){
 super(props)
 console.log(props)
}
 render(){
  return (
    <ImageBackground source={image} style={styles.image}>
    <View style={styles.AppBar}>
            <Ionicons name="ios-menu" size={32} color="white"  
            onPress={() => {this.props.navigation.openDrawer()}}/>
        </View>
    <View style={styles.container}>
        <Text style={styles.cardComponent}>{this.props.route.params.Header}</Text>
        <View style ={styles.Text}>
            <Text style={{fontWeight: 'bold',  fontSize: 15}}>DeadLine: Date    </Text>
            <Text style={{fontWeight: 'bold',  fontSize: 15}}>Amount: Earn</Text>  
        </View>
        <View style={styles.card}>
            <Text style={{fontWeight: 'bold'}}>UI Design, Zip File, Instraction And Logo</Text>
        </View>
        <TouchableOpacity style={styles.Button}  onPress={() => this.props.navigation.navigate('Home')}>
             <Text style={styles.font}>OK</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
  );
  }
}

const styles= StyleSheet.create({
    image:{
        height:'100%'
    },
    card:{
        backgroundColor : '#fff',
        borderRadius:6,
        marginBottom: 10,
        marginLeft: '2%',
        width: '60%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        textAlign: 'center',
        padding: 10,
        marginLeft: 20,
        paddingTop: 40,
        paddingBottom: 40,
        margin:10
        
    },
    cardComponent:{
        color: 'blue',
        margin: 10,
        fontSize: 25,
        fontWeight: 'bold'
    },
    Text:{
        flexDirection: 'row',
        margin: 10,
        
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30%'
    },
    AppBar:{
        marginLeft:15,
        marginTop:10,
        opacity:0.8
     },
     Button:{
        marginVertical: '10px',
        borderRadius:7,
        backgroundColor: '#1E90FF',
        color: 'white',
        height: 35,
        width: '20%',
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
        marginTop:20,
        margin:10
      },
      font:{
        textAlign: 'center',
        color:'white',
        fontSize:16,
        fontWeight:"500"
    
    
      }
})


export default Details