import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Modal, Pressable, Text,ScrollView, Button, Alert, Image, View } from "react-native";
import { TouchableOpacity } from 'react-native'
import { COLORS } from "../commoncode/Textinput/colour";
//import { image } from "../../Boxcode/commoncode/Textinput/image";
import TopboxHeader from "../commoncode/screenheader/index";
import styles from "../cuberegi/styles";
import Infield from"../commoncode/Textinput/index";

const CubeRegister = (props) => {

    const [firstname, onfirstname] = useState("");
    const [lastname, onlastname] = useState("");
    const [dob, setDOB] = useState("");
    const [contactNo, setcontactno] = useState("");
    const [typeusername, setTypeusername] = useState("");
    const [email, setEmail] = useState("");
    const [Bname, setBussinessname] = useState("");
    const [Yourdesignation, setDesignation] = useState("");
    const [Bcontactno, setBcontactno] = useState("");
    const [Bemail, setBemail] = useState("");
    const [address1, setAddress1] = useState("");
    const [Address2, setAddress2] = useState("");
    const [Zipcode, setZipcode] = useState("");

    const [pass, setPassword] = useState("");
    const [passconst, setPasswordconst] = useState("");


    const nextScreen = () => {
        props.navigation.navigate('Logbox')

    }
    
    // const nextScreen2 = () => {
    //     props.navigation.navigate('Logbox')
    // }
    return (
        <SafeAreaView style={styles.topheader}>
            
            <TopboxHeader title="Registration" navigation={props.navigation} />
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
                            onChangeText={(text) => setDOB(text)}
                            value={dob}
                            placeholder="DOB"
                            placeholderTextColor={COLORS.bcc5d4}

                        />
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
                            onChangeText={(text) => setTypeusername(text)}
                            value={typeusername}

                            placeholder="Type your username"
                            placeholderTextColor={COLORS.bcc5d4}

                        />
                    </View>
                    <View style={styles.inputView}>
                        <  Infield
                            style={styles.input}
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            placeholder="Email Address"
                            keyboardType='email-address'
                            placeholderTextColor={COLORS.bcc5d4}

                        />
                    </View>

                    <Text style={styles.headbar}>Business Information</Text>

                    <View style={styles.inputView}>
                        <  Infield
                            style={styles.input}
                            onChangeText={(text) => setBussinessname(text)}
                            value={Bname}

                            placeholder="Business Name"
                            placeholderTextColor={COLORS.bcc5d4}

                        />
                    </View>
                    <View style={styles.inputView}>
                        <  Infield
                            style={styles.input}
                            onChangeText={(text) => setDesignation(text)}
                            value={Yourdesignation}

                            placeholder="Your Designation"
                            placeholderTextColor={COLORS.bcc5d4}

                        />
                    </View>
                    <View style={styles.inputView}>
                        <  Infield
                            style={styles.input}
                            onChangeText={(text) => setBcontactno(text)}
                            value={Bcontactno}

                            placeholder="Business Contact Number"
                            placeholderTextColor={COLORS.bcc5d4}

                        />
                    </View>
                    <View style={styles.inputView}>
                        <  Infield
                            style={styles.input}
                            onChangeText={(text) => setBemail(text)}
                            value={Bemail}

                            placeholder="Business Email Id"
                            placeholderTextColor={COLORS.bcc5d4}

                        />
                    </View>
                    <View style={styles.inputView}>
                        <  Infield
                            style={styles.input}
                            onChangeText={(text) => setAddress1(text)}
                            value={address1}

                            placeholder="Address line 1"
                            placeholderTextColor={COLORS.bcc5d4}

                        />
                    </View>
                    <View style={styles.inputView}>
                        <  Infield
                            style={styles.input}
                            onChangeText={(text) => setAddress2(text)}
                            value={Address2}

                            placeholder="Address line 2"
                            placeholderTextColor={COLORS.bcc5d4}

                        />
                    </View>
                    <View style={styles.inputView}>
                        <  Infield
                            style={styles.input}
                            onChangeText={(text) => setZipcode(text)}
                            value={Zipcode}

                            placeholder="Zip code"
                            placeholderTextColor={COLORS.bcc5d4}

                        />
                    </View>
                    <View>
                        <View style={styles.inputView}>
                            < Infield
                                style={styles.passInput}
                                onChangeText={(text) => setPassword(text)}
                                value={pass}
                                placeholder="Password"
                                placeholderTextColor={COLORS.bcc5d4}
                                isPass={false}
                            />
                        </View>
                        <View style={styles.inputView}>

                            <  Infield
                                style={styles.passInputconf}
                                onChangeText={(text) => setPasswordconst(text)}
                                value={passconst}
                                placeholder="Confirm Password"
                                placeholderTextColor={COLORS.bcc5d4}
                                isPass={false}
                            />
                        </View>
                         
                            <TouchableOpacity style={styles.submit} activeOpacity={0.6}  onPress={() => {
                        props.navigation.navigate('DrawerAfterLogin');
                    }}>
                                
                                <Text style={styles.submitstyle} >Submit</Text>
                            </TouchableOpacity>
                         
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default CubeRegister;