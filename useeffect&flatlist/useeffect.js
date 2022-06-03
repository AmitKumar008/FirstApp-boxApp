import React, { useState, useEffect } from 'react';
import {  Text, Button, View,  } from "react-native";

 
function  UsEffect() {
  const [count, setCount] = useState(0);

   
  useEffect(() => {
     console.log(`You Clicked Button ${count} Times`)

     
     })
    

  return (
    <View style={{ justifyContent:"center", marginTop:100,}} >
      <Text style={{ fontSize:50, marginTop:100}}>Count: {count} </Text>
      <Button title='Update count' onPress={() => setCount(count+1)}>
        
      </Button>
     
    </View>
  )
};
export default UsEffect;