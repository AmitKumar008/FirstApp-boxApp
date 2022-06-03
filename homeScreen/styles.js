import { StyleSheet } from 'react-native'
//import { green100 } from 'react-native-paper/lib/typescript/styles/colors';
//import { COLORS } from '../commoncode/Textinput/colour';
const styles = StyleSheet.create({
  // Textview:{
  //     justifyContent:'center',
  //     alignItems:'center',
  //     borderRadius:10,
  //     marginTop:'50%',

  // },
  emptyMessageStyle: {
    textAlign: 'center',
    //My current hack to center it vertically
    //Which does not work as expected
    marginTop: '50%', 
  },
  container: {
    flex: 1,
    marginTop: 30,
    padding: 2,

  },
  item: {
    backgroundColor: '#faddc8',
    // borderWidth: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    width: "92%",
  },
  title: {
    fontSize: 25,
  },
  id: {
    fontSize: 18,
    color: 'blue'
  },
  pendingbtn: {
    justifyContent: 'center',
    alignItems: 'center',
     
  },
  pending: {
    justifyContent: 'flex-end',

    alignItems: 'center',
    alignContent: 'center',
    fontSize: 17,
     
    color: 'green',
    padding: 6,
    borderColor: 'green',
   borderWidth: 2,

  },
  alertbox: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 17,
    width: '70%',
    backgroundColor: "black",
    color: 'white',
    padding: 5,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 5,
  },
  profileview: {
    flexDirection: 'row',
    marginTop: 10,

    fontSize: 17,

  },
  PersonName: {
    fontSize: 18,

  },
  Persongmail: {
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rejectbtn:{
    
    justifyContent: 'center',
    height:50,
    width:100
  },
  reject: {
    fontSize: 18,
    color: 'red',
    
    marginTop: 15,
    borderColor: 'red',
    borderWidth: 2.1,
    padding: 5,
    paddingLeft: 20,
    borderRadius: 10,
     
  },
  acceptbtn:{
    
    justifyContent: 'center',
    height:50,
    width:100,
  },
  accept: {
    fontSize: 18,
    color: "green",
    borderColor: 'green',
    marginTop: 15,
    borderWidth: 2.1,
    padding: 5,
    paddingLeft: 20,
    borderRadius: 10,
    
  },
});

export default styles;