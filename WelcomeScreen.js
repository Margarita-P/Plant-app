import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button} from 'react-native';

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('./assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./assets/favicon.png')}/>
            <Text>Water your plants</Text>
            <Button title="Start"
                onPress={() => navigation.navigate('FirstPage')}/>
            </View>
            
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'black'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'white'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 80,
        alignItems: 'center'
    }
})
export default WelcomeScreen;