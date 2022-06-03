import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Modal, Text, Pressable, Alert, Image, View } from "react-native";
import { TouchableOpacity } from 'react-native'
import { COLORS } from "../../commonComponent/Colors";
import { image } from "../../Boxcode/commoncode/Textinput/image";
import styles from "../login/Styles";
//import TopboxHeader from "../commoncode/screenheader";
import 'react-native-gesture-handler';

const Logbox = (props) => {
    
    const [modalVisible, setModalVisible] = useState(false);
    
    const [opacity, setopacitya] = useState(1);
    
    const regScreen = () => {
        props.navigation.navigate("Loginpage")
    }
    const regScreens = () => {
        //props.navigation.navigate("CubeRegister")
        setModalVisible(true)
        setopacitya(0.5)
    }

    const createAccount=()=>{
        setModalVisible(false)
        setopacitya(1)
        props.navigation.navigate("CubeRegister")
    }
    return (
        <SafeAreaView style={{backgroundColor: "black",
        width: '100%',
        height: '100%',
       opacity: opacity}}>
            {/* <TopboxHeader title="Welcome" navigation={props.navigation} /> */}
            <Image style={styles.logo1} source={image.box} />

            
                <TouchableOpacity style={styles.loginstyle} onPress={() => regScreen()}>
                    <Text style={styles.loginbox}>Log In</Text>
                </TouchableOpacity>
            

             
                <TouchableOpacity style={styles.signupstyle} onPress={() => regScreens()}>
                    <Text style={styles.signbox}>Sign Up</Text>
                </TouchableOpacity>
             
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={styles.foooterstyle}>Term of Use and Privacy Policy</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                hasBackdrop={true}
                backdropOpacity={1}
                onBlur={true}
                style={{ height: '100%', backgroundColor: 'white', width: '100%', alignSelf: 'center' }}
                onRequestClose={() => {
                   // Alert.alert("Modal has been closed.");
                    setModalVisible(false);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View>
                            <TouchableOpacity style={styles.Fbbutton} activeOpacity={0.6} >
                                <Image style={{ width: 30, height: 30, marginRight: 10 }} source={image.FbImg} />
                                <Text style={styles.fbstyle}>Continue with Facebook</Text></TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.googlebutton} activeOpacity={0.6}>
                                <Image style={{ width: 30, height: 30, }} source={image.googleImg} />
                                <Text style={styles.googlestyle} >Continue with Google</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => createAccount()} style={styles.Cubebutton} activeOpacity={0.6} >
                                <Image style={{ width: 30, height: 30, }} source={image.box} />
                                <Text style={styles.cubeText}>Create a CUBE Account</Text>
                            </TouchableOpacity>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => { setModalVisible(!modalVisible)
                            
                                setopacitya(1)
                            }
            }
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>

    );
}

export default Logbox