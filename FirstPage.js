import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

export default function FirstPage(navigation) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
        <TouchableHighlight onPress={() => navigation.navigate('SecondPage')}>
          <Image
            style={styles.lipstickPlant}
            source={require('./assets/lipstickplant.jpg')}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('WelcomeScreen')}>
          <Image
            style={styles.fiddleTree}
            source={require('./assets/fiddleLeafTree.jpg')}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('WelcomeScreen')}>
          <Image
            style={styles.devilsIvy}
            source={require('./assets/devilsIvy.jpg')}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('WelcomeScreen')}>
          <Image
            style={styles.orchid}
            source={require('./assets/orchid.jpg')}
          />
        </TouchableHighlight>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lipstickPlant: {
    width: 150,
    height: 150,
    position: 'absolute',
    right:     0,
    bottom:     100 ,
  },
  fiddleTree: {
    width: 150,
    height: 200,
    position: 'absolute',
    left:     10,
    bottom:     50 ,
  },
  devilsIvy: {
    width: 150,
    height: 200,
    position: 'absolute',
    right:     0,
    bottom:     -120 ,
  },
  orchid: {
    width: 150,
    height: 150,
    position: 'absolute',
    left:     10,
    bottom:     -120 ,
  }

});
