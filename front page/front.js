import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button, Alert, Image, View, } from "react-native";
import { TouchableOpacity } from 'react-native'
import { COLORS } from "../../commonComponent/Colors";
import { image } from "../../Boxcode/commoncode/Textinput/image";
//import InputField from "../../commonComponent/textInput";
import styles from "./styles";

const Front = (props) => {
    
    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate("Logbox")
        },2000)
    },[])

    return (
        <SafeAreaView style={{ backgroundColor: '#000', width: '100%' }}>

            <View style={styles.frontlook}>
                <TouchableOpacity >
                    <Image style={styles.imglook} source={image.box} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    );

}
export default Front