import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

export default function SecondPage({ navigation }) {
    return (
        <View style={styles.secondpage}>
            <Button
                title="Go to FirstPage"
                onPress={() => navigation.navigate('FirstPage')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    secondpage: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})