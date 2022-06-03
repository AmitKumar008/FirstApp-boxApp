import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: '001 ',
    title: 'First  Value',
  },
  {
    id: '002',
    title: 'Second Value',
  },
  {
    id: ' 003',
    title: 'Third  Value',
  },
  {
    id: ' 004',
    title: 'Four  Value',
  },
  {
    id: ' 005',
    title: 'Five  Value',
  },
  {
    id: ' 006',
    title: 'Six  Value',
  },
  {
    id: ' 007',
    title: 'Seven  Value',
  },
  {
    id: ' 008',
    title: 'Eight Value',
  },
  {
    id: ' 009',
    title: 'Nine  Value',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Applist = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        
       
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Applist;

 