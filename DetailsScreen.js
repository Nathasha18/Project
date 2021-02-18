import * as React from 'react';
import { StyleSheet, Text, View, Button,ImageBackground, Image, TextInput } from 'react-native';
import bg from './assets/bg.jpeg';
import logo from './assets/logo.jpeg';

class DetailsScreen extends React.Component {
  render() {
    return (
      < ImageBackground source={bg} 
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{width:150, height: 90, alignItems: 'center',marginVertical:50 }} source={logo}/>
        <View style={{ flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',}}>
              <View style={{flex: 1,width:200, height:30,}}>
          
              </View>
              <View style={{flex: 0.5,width:200, height:30,marginVertical:50}}>
              <Button 
               color='#233554'
        
        title="Details"
      
      />
              </View>
              <View style={{flex: 0.5,width:200, height:30,marginVertical:50}}>
              <Button 
        color='#233554'
        title="Tasks"
        onPress={() =>
          this.props.navigation.navigate('Tasks')
        }
      />
              </View>
              <View style={{flex: 0.5,width:200, height:30,marginVertical:50}}>
              <Button  color='#233554'
        
        title="Map"
      
      />
              </View>
            </View>
        
       
        
      </ImageBackground>
    );
  }
}

// ...

export default DetailsScreen;