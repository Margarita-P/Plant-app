import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

export default function FirstPage({navigation}) {
    return (
        <View style={styles.container}>
            <Button
                title="Go to SecondPage"
                onPress={() => navigation.navigate('SecondPage')}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
    
})