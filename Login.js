Gabija Gleiznyte
import { StatusBar } from "expo-status-bar"
//imprt { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
//imprt {  } from "react-native";
import {StyleSheet,Pressable,Text,View,TextInput,Alert} from "react-native";
import {getAuth, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import PropTypes from 'prop-types'

export const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};


export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    getAutentification();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        // Signed in 
        //const user = userCredentials.user;
        navigation.navigate("FirstPage");
        // ...
      })
      .catch(error => alert(error.message))
  }

   const getAutentification = () => {
    auth = getAuth();   
  }

  return (

    <View style={styles.container}>

      <StatusBar style="auto" />
      <Text style={styles.title}>Prisijungimas</Text>

      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Elektroninis paštas"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />

      </View>

      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Slaptažodis."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />

      </View>
      <Pressable style={styles.loginBtn} onPress={handleLogin}>
        <Text style= {styles.btntext}>Prisijungti</Text>
        </Pressable> 
      
    </View>

  );

}

export function ForgotPassword({ onPasswordReset }) {
  const forgotpassword = () => {
    getAutentification();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        onPasswordReset();
        Alert.alert(
          'Slaptažodžio atnaujinimas',
          'Slaptažodžio atnaujinimas išsiųstas nurodytu elektroniniu paštu'
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
    <Pressable onPress={forgotpassword}>
        <Text style={styles.forgot_button}>Pamiršai slaptažodį?</Text>
      </Pressable>
      
      
      </View> 
      );
  }

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
  navigate: PropTypes.object.isRequired,
}

ForgotPassword.propTypes = {
  onPasswordReset: PropTypes.object.isRequired
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  title: {
    color: "#418B5B",
    fontSize: 30,
    margin: 30
  },

  inputView: {
    backgroundColor: "#AAD5A3",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,

  },

  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#DFB79E",
  },

  btntext:{
    fontSize:20,
    color: '#F5F5F5'
  }

});
