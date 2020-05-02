import React from 'react';
import { View, Text, StyleSheet, ScrollView,Button,ImageBackground,TouchableOpacity } from 'react-native';   
import { Ionicons } from '@expo/vector-icons';
import image from '../assets/Home.jpg'

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state={
           array:[
                {Header: 'Application Name', index:1,DeadLine:'Date',Earn:'Amount',icon:false},
                {Header: 'Website Name', index:2, DeadLine:'Date', Earn:'Amount',icon:false},
                {Header: 'Website Name', index:2, DeadLine:'Date', Earn:'Amount',icon:false},
                {Header: 'Application Name', index:2, DeadLine:'Date', Earn:'Amount',icon:false},
                {Header: 'Application Name', index:2, DeadLine:'Date', Earn:'Amount',icon:false},
                {Header: 'Website Name', index:2, DeadLine:'Date', Earn:'Amount',icon:false},
            ],
         }
        }  
    favoriteHandler=(i)=>{
        let content=[...this.state.array]
        let contentElement=[content[i].icon]
        if(contentElement===false){
            contentElement=true
        }else
        if(contentElement===true){
            contentElement=false
        }
        content[i].icon=contentElement

        this.setState({array: content})
        console.log(this.state.array)

    }
 render(){
   
    return(
     <ImageBackground source={image} style={styles.main} >

        <View style={styles.AppBar}>
            <Ionicons name="ios-menu" size={25} color="white"  
            onPress={() => {this.props.navigation.openDrawer()}}/>
            <View style={{opacity: 0.8}}>
             <Text style={{ fontWeight:'bold', fontSize:20,}}>                          Home</Text>
            </View>
        </View>   

        <ScrollView scrollEnabled={true}> 
        {this.state.array.map((value,i)=>{
            const IconName= value.icon? 'red': 'black'
            return <View key={i} style={styles.card}>
                     
                        <View style={styles.icon}>
                            <Text style={styles.cardComponent}>{value.Header}</Text>
                            <Ionicons name='ios-heart' size={32} color={IconName}  
                                onPress={()=>this.favoriteHandler(i)}/>
                        </View>
                        <View style={styles.Text}>
                            <Text fontWeight='bold'>DeadLine :{value.DeadLine}   </Text>
                            <Text fontWeight='bold'>Amount :{value.Earn}</Text>
                        </View>
                        <TouchableOpacity style={styles.Button}  onPress={()=>this.props.navigation.navigate('Details',{Header: value.Header})}>
                            <Text style={styles.font}>View Details</Text>
                        </TouchableOpacity>

                    </View>
        })}

        </ScrollView>
    </ImageBackground>
  );
      
}
}

const styles= StyleSheet.create({
    main:{

    },
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#fff',
        borderRadius:6,
        marginBottom: 10,
        marginLeft: '2%',
        width: '70%',
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        margin:5,

        padding: 10,
        marginLeft: 65,
        
    },
    cardComponent:{
        color: 'blue',
        margin: 5,
        fontWeight: 'bold'
    },
    Text:{
        flexDirection: 'row',
        margin: 5,
    },
    icon:{
        flexDirection: 'row'
    },
    
    AppBar:{
       marginLeft:15,
       marginTop:10,
       opacity:0.8,
       flexDirection:'row'
    },
    Button:{
        borderRadius:7,
        backgroundColor: '#1E90FF',
        height: 30,
        width: '50%',
        alignSelf:'center',
        padding:3,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      },
      font:{
        textAlign: 'center',
        color:'white',
        fontSize:16,
        fontWeight:"500"
    
    
      }
})

export default HomePage
