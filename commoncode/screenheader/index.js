import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { image } from '../Textinput/image';
import styles from './styles';


const TopboxHeader = (props) => {
    return (
        <View style={styles.TopHeader}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image style={styles.backImg} source={image.backbtn} />
            </TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
            <Text></Text>
        </View>
    )
}



export default TopboxHeader;