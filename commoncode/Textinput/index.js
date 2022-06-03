import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
 
import { image, ImagesUrl } from '../Textinput/image';
import styles from './styles';


const Infield = ({ onChangeText, keyboardType, placeholder, value, placeholderTextColor, style,isPass,autoCapitalize }) => {
    const [isToggle, setToggle] = useState(false)
    const [secureText, setSecureText] = useState(true)

    console.log("passs", isPass)

    const showPass = () => {
        setToggle(true)
        setSecureText(false)
    }
    const hidePass = () => {
        setToggle(false)
        setSecureText(true)
    }

    return (

        <View>
        {isPass == false ?
            <View style={[styles.Selectedsignup, style,]}>
                <TextInput style={styles.textstyles2}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={secureText}
                />
                {isToggle == false ?
                    <TouchableOpacity onPress={() => showPass()}>
                        <Image style={{ width: 20, height: 20, marginRight: 10, }} source={image.eyeoff} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => hidePass()}>
                        <Image style={{ width: 20, height: 20, marginRight: 10, }} source={image.eyeon} />
                    </TouchableOpacity>
                }
            </View>
            :
            <View style={[styles.Selectedsignup, style]}>
                <TextInput style={styles.textstyles}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    bodyText={value}
                    autoCapitalize={autoCapitalize}
                    keyboardType={keyboardType}
                    //   maxLength={maxLength}
                    //   multiline={multiline}
                    placeholderTextColor={placeholderTextColor}
                //   onSubmitEditing={onSubmitEditing}
                />
            </View>

        }
    </View>
        // <View>
             
        //         <View style={[styles.Selectedsignup, styles,]}>
        //             <TextInput style={styles.textstyles}
        //                 placeholder={placeholder}
        //                 onChangeText={onChangeText}
        //                 value={value}
        //                 keyboardType={keyboardType}
        //                 placeholderTextColor={placeholderTextColor}
                         
        //             />
                     
        //         </View>
              
        //  </View>

    )
}



export default Infield;