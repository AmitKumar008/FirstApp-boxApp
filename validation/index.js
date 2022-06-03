import React, { useState, Component } from "react";
import { SafeAreaView, StyleSheet, TextInput, Modal, Pressable, Text, ScrollView, Button, Alert, Image, View, } from "react-native";
import { TouchableOpacity } from 'react-native'
import { COLORS } from "../commoncode/Textinput/colour";
//import { image } from "../../Boxcode/commoncode/Textinput/image";
import TopboxHeader from "../commoncode/screenheader/index";
import styles from "..//validation/login_style";
import Infield from "../commoncode/Textinput/index";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";



const Validationlist = (props) => {

    const [firstname, onfirstname] = useState("");
    const [lastname, onlastname] = useState("");
    const [contactNo, setcontactno] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");



    const onPressButton = (props) => {

        if (firstname == "") {
            alert("Please enter Firstname");
            return;
        }
        if (lastname == "") {
            alert("plaese enter Lastname")
            return;
        }
        if(contactNo==""){
            alert("plaese enter ContactNo.")
            return; 
        }
        if(email==""){
            alert("plaese enter  email")
            return; 
        }
        if(address==""){
            alert("plaese enter Address ")
            return; 
        }
        
    }



    return (
        <SafeAreaView style={styles.topheader}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.topView}>
                    <Text style={styles.header}>Personal Information</Text>
                    <View style={styles.firstname}>
                        <View style={styles.data}>
                            < Infield
                                style={styles.input}
                                onChangeText={(text) => onfirstname(text)}
                                value={firstname}
                                placeholder="First Name"
                                placeholderTextColor={COLORS.bcc5d4}
                            />
                        </View>

                        <View style={styles.lastName}>
                            <  Infield
                                style={styles.input}
                                onChangeText={(text) => onlastname(text)}
                                value={lastname}
                                placeholder="Last Name"
                                placeholderTextColor={COLORS.bcc5d4}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>

                    <View style={styles.inputView}>
                        <  Infield
                            style={styles.input}
                            onChangeText={(text) => setcontactno(text)}
                            value={contactNo}
                            placeholder="Contact No."
                            keyboardType='number-pad'
                            placeholderTextColor={COLORS.bcc5d4}

                        />
                    </View>

                    <View style={styles.inputView}>
                        <  Infield
                            style={styles.input}
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            placeholder="xyz@gmail.com"
                            keyboardType='email-address'
                            autoCapitalize='none'
                            placeholderTextColor={COLORS.bcc5d4}

                        />
                    </View>


                    <View style={styles.inputView}>
                        <  Infield
                            style={styles.input}
                            onChangeText={(text) => setAddress(text)}
                            value={address}
                            placeholder="Address line "
                            placeholderTextColor={COLORS.bcc5d4}

                        />
                    </View>


                    <TouchableOpacity style={styles.submit} activeOpacity={0.6} onPress={() => onPressButton()}>

                        <Text style={styles.submitstyle} >Submit</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Validationlist;
