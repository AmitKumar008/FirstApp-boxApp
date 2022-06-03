import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, FlatList, RefreshControl, TextInput, Text, Button, Alert, Image, View, TouchableOpacity } from "react-native";
import { image } from "../commoncode/Textinput/image";
// import { TouchableOpacity } from 'react-native'
// import TopboxHeader from "../commoncode/Textinput";
import styles from "../homeScreen/styles";



const DATA = [
    {
        id: 'Nile001',
        pending: 'Pending',
        title: 'Amit kumar',
        alertbox: 'delivery estimate Time View ',
        Name: 'Amit kumar',
        gmail: 'amit007@gmail.com',
        reject: 'Reject',
        accept: 'Accept',
    },
    {
        id: 'Nile002',
        pending: 'Pending',
        title: 'Nikki Gupta',
        alertbox: 'delivery estimate (2 hours) ',
        Name: 'Nikki Guupta',
        gmail: 'nikkigupta02@gmail.com',
        reject: 'Reject',
        accept: 'Accept',
    },
    {
        id: 'Nile003',
        pending: 'Pending',
        title: 'Akash Payal ',
        alertbox: 'delivery estimate (4 hours) ',
        Name: 'Akash Payal',
        gmail: 'akashpayal25@gmail.com',
        reject: 'Reject',
        accept: 'Accept',
    },
    {
        id: 'Nile004',
        pending: 'Pending',
        title: 'Rahul',
        alertbox: 'delivery estimate (4 hours) ',
        Name: 'Rahul',
        gmail: 'Rahul@gmail.com',
        reject: 'Reject',
        accept: 'Accept',
    },
    {
        id: 'Nile005',
        pending: 'Pending',
        title: 'Ashish Payal ',
        alertbox: 'delivery estimate (4 hours) ',
        Name: 'Ashish Payal',
        gmail: 'ashishpayal25@gmail.com',
        reject: 'Reject',
        accept: 'Accept',
    },
    {
        id: 'Nile006',
        pending: 'Pending',
        title: 'Akash',
        alertbox: 'delivery estimate (4 hours) ',
        Name: 'Akash',
        gmail: 'akash@gmail.com',
        reject: 'Reject',
        accept: 'Accept',
    },
    {
        id: 'Nile007',
        pending: 'Pending',
        title: 'Payal ',
        alertbox: 'delivery estimate (4 hours) ',
        Name: 'Payal',
        gmail: 'payal25@gmail.com',
        reject: 'Reject',
        accept: 'Accept',
    },
    {
        id: 'Nile008',
        pending: 'Pending',
        title: 'Ak ',
        alertbox: 'delivery estimate (4 hours) ',
        Name: ' Ak',
        gmail: 'ak@gmail.com',
        reject: 'Reject',
        accept: 'Accept',
    },
     

];

const Item = ({ title, alertbox, id, pending, Name, gmail, accept, reject }) => (
    <View style={styles.item}>
        <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
            <Text style={styles.id}>{id}</Text>

            <TouchableOpacity style={styles.pendingbtn}> 
                <Text style={styles.pending}>{pending}</Text>
            </TouchableOpacity>

        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.alertbox}>{alertbox}</Text>

        <View style={styles.profileview}>
            <Image style={{ width: 35, height: 40, marginRight: 10, marginTop: 5 }} source={image.prficon} />
            <View style={{ flexDirection: 'column', justifyContent: 'center', }}>
                <Text style={styles.PersonName}>{Name}</Text>
                <Text style={styles.Persongmail}>{gmail}</Text>
            </View>
        </View>
        <View style={styles.footerbtn}>
            <TouchableOpacity style={styles.rejectbtn}>
            <Text style={styles.reject}>{reject}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptbtn}>
            <Text style={styles.accept}>{accept}</Text>
            </TouchableOpacity>
        </View>
    </View>
);
// structuring you title data in renderItem props of flatlist
const Home = () => {

    const renderItem = ({ item }) => (
        <Item title={item.title}
            alertbox={item.alertbox}
            id={item.id}
            pending={item.pending}
            Name={item.Name}
            gmail={item.gmail}
            reject={item.reject}
            accept={item.accept}
        />

    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{ flex: 1, }}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                //numColumns={false}
               // contentContainerStyle={{ flexGrow: 1,justifyContent: "center",}}
                //disableVirtualization={false}
                // ListFooterComponent={renderFooter}
                // ListHeaderComponent={renderHeader}
                //initialScrollIndex='2'
               // progressViewOffset={200}

                //refreshing={false} 
                //onRefresh={} 

               // viewabilityConfig = {5}
                // {itemVisiblePercentThreshold=5}
                
                // ListHeaderComponent={() => (!DATA.length? 
                //     <Text style={styles.emptyMessageStyle}>The list is empty</Text>  
                //     : null)
                //   }
        
            // columnWrapperStyle={{ marginTop: 10 }}

            //horizontal={false}
            //showsHorizontalScrollIndicator={false}

            //initialNumToRender='10'
           // ItemSeparatorComponent='true'
            //inverted='-1'

            // onEndReachedThreshold={0.5}
            />
        </SafeAreaView>
    );
}




export default Home;