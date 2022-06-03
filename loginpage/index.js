import React, { useState} from "react";
import { SafeAreaView, AppRegistry, StyleSheet, TextInput, Text, Button, Alert, Image, View, number } from "react-native";
import { TouchableOpacity } from 'react-native'
import { COLORS } from "../commoncode/Textinput/colour";
import { image } from "../../Boxcode/commoncode/Textinput/image";
import styles from "../loginpage/styles";
import Infield from "../commoncode/Textinput";
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import TopboxHeader from "../commoncode/screenheader/index" ;
import 'react-native-gesture-handler';

const Loginpage = (props) => {
    const [text, onChangeText] = useState(null);
    const [number, onChangeNumber] = useState(null);

    // const  storeData = async () => {
    //     try {
    //         await AsyncStorage.setItem('mykey', text,number);
    //         onChangeText('');
    //         onChangeNumber('');

    //         alert('Successfully Added');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const  retrieveData = async () => {
    //     try {
    //         const LogInData = await AsyncStorage.getItem('mykey');
    //         if (LogInData !== null) {
    //             // We have data!!
    //             console.log(LogInData);
    //           }
    //         // onChangeNumber(LogInData);
    //     }catch(error){
    //         console.log(error);

    //     }
    // };


    const regScreen = () => {
        props.navigation.navigate("Logbox")
    }
    const regScreens = () => {
        props.navigation.navigate("CubeRegister")
    }

    return (
        <SafeAreaView style={styles.mainsyle}>
            {/* <TopboxHeader title="Sign IN" navigation={props.navigation} />  */}
            <Image style={styles.logo1} source={image.box} />

            <View style={styles.topView}>
                <Infield
                    style={styles.input}
                    onChangeText={(text) => onChangeText(text)}
                    value={text}
                    placeholder="UserName and Email"
                    autoCapitalize='none'
                    placeholderTextColor={COLORS.black}
                    secureTextEntry={true}
                />
                < Infield
                    style={styles.input}
                    onChangeText={(number) => onChangeNumber(number)}
                    value={number}
                    placeholder="Password"
                    placeholderTextColor={COLORS.black}
                    secureTextEntry={true}
                />

            </View>


            <TouchableOpacity style={styles.loginstyle} activeOpacity={0.6}
                onPress={() => {
                    alert('You data is Valid!');
                   // props.navigation.navigate('DrawerAfterLogin');
                    // storeData() // add itemlist in this func on click login btn
                    // retrieveData()
                }}
            >
                <Text style={styles.loginbox}>Log In</Text>
            </TouchableOpacity>



            <View style={styles.footer}>
                <TouchableOpacity onPress={() => regScreen()} >
                    <Text style={styles.forgotstyle}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer2}>
                <TouchableOpacity onPress={() => regScreens()}>
                    {/* onPress={() => {
                            alert('You tapped the Signup button!');
                        }} */}
                    <Text style={styles.forgotstyle2}>Don't Have an Account?Signup</Text>

                </TouchableOpacity>
            </View>

        </SafeAreaView>

    );
}

export default Loginpage