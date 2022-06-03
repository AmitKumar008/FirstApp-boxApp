import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, Alert, Linking, ScrollView } from 'react-native';

 


// let unsubscribe = ''
class DrawerContent extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.drawerTop}>
                    <Text>
                        Home
                    </Text>
                    <Text>
                        Login
                    </Text>
                    <Text>
                        Registration
                    </Text>
                    <Text></Text>
                </View>

            </View>
        );
    }

}



export default DrawerContent;
