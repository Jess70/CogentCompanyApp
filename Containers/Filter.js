import { StyleSheet, Text, View, ImageBackground, } from 'react-native';
import React from 'react'
import image from '../assets/rest12.jpg'
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
//import MultiSlider from '@ptomasroos/react-native-multi-slider';

 
export default function App({navigation}) {
    return (
      <ImageBackground source={image} style={styles.main}>
      <View styles={styles.components}>
        <View style={styles.AppBar}>
            <Ionicons name="ios-menu" size={32} color="white"  
                onPress={() => {navigation.openDrawer()}}/>
        </View>       
        <View style={{alignSelf:'center'}}>
                <Text style={{ fontWeight:'bold', fontSize:20,}}> Filters</Text>
        </View>     
       
        <View>
            <View style={styles.CheckBox}> 
            <CheckBox title='Application' checkedIcon='dot-circle-o' uncheckedIcon='circle-o'/>
            <CheckBox title='Website' checkedIcon='dot-circle-o' uncheckedIcon='circle-o'/>
            </View>
        </View>
      {/*  <MultiSlider  values={[10, 100]}sliderLength={10} min={0} max={10} step={1} /> */}
        </View>    
      </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
    main:{
        height:'100%',
        
    },
    CheckBox:{
        flexDirection: "row",
        marginTop: 50,
    },
    components:{
        justifyContent:'center',
    },
    AppBar:{
        marginLeft:15,
        marginTop:5
    }
  })