import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'
 
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
 
  toggleOpen = () => {
    this.setState({ open: !this.state.open });
    Console.log({state})
  };
 
  drawerContent = () => {
    return (
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
        <Text>Close</Text>
      </TouchableOpacity>
    );
  };
 
  render() {
    return (
      <View>
        <MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <TouchableOpacity >
            <Button onPress={this.toggleOpen} title="Open"></Button>
          </TouchableOpacity>
        </MenuDrawer>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({

  animatedBox: {
    flex: 1,
    backgroundColor: "#38C8EC",
    padding: 10
  },
})

export default Example;