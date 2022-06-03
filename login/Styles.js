import { StyleSheet } from 'react-native'
import { COLORS } from '../commoncode/Textinput/colour';
const styles = StyleSheet.create({
    
        
     
    logo1: {
        justifyContent:'center',
        alignContent:'center',
        width: '95%', 
        height: '45%', 
        marginBottom:40,
        marginTop:30,
       
         
    },
    loginstyle: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 10,
        width: '90%',
        justifyContent: 'center',
       // alignContent:'center',
        height: 50,
        textAlign: "center",
        marginLeft: '5%',
        paddingTop: 10,
        marginTop: '5%'

    },
    loginbox: {
         
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    signupstyle: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 10,
        width: '90%',
        justifyContent: 'center',
        height: 50,
        textAlign: "center",
        marginLeft: '5%',
        paddingTop: 10,
        marginBottom: 20,
        marginTop: '5%'
    },
    signbox: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    footer:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        marginTop:50,
        padding:3,
         
    },
    foooterstyle:{
       
        color:'#fff',
        fontWeight: 'bold',
        fontSize: 14,

    },
    centeredView: {
        marginTop:'98%',      
        justifyContent: "center",
        alignItems: "center",
        
      },
      modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding:60,
        
        width:'100%', 
        alignItems: "center",
        justifyContent:'center',
        // shadowColor: "red",
        // shadowOffset: {
        //   width: 0,
        //   height: 2
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 6,
        // elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      // buttonOpen: {
      //   alignItems: 'center',
      //   backgroundColor: 'white',
      //   borderWidth: 1,
      //   borderColor: '#fff',
      //   borderRadius: 10,
      //   padding: 10,
      //   width: '90%',
      //   justifyContent: 'center',
      //   height: 50,
      //   textAlign: "center",
      //   marginLeft: '5%',
      //   paddingTop: 10,
      //   marginBottom: 20,
      //   marginTop: '5%'
      // },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        justifyContent:'center',
        width:'100%',
        marginBottom: 15,
        textAlign: "center",
        fontWeight:'10',
        fontSize:20,
        //borderColor:COLORS.blue1,
        borderWidth:1,
        borderRadius:10,
        padding:7,
      },
      Fbbutton: {
        flexDirection: "row",
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#a9a9a9',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10,
        height: 50
  
    },
    fbstyle: {
      color: '#3B5998',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center'
  },
  googlebutton: {
    flexDirection: "row",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: 'space-around',
    width: '100%',
    borderColor: '#a9a9a9',
    borderRadius: 40,
    marginBottom: 10,
    height: 50,
  },
  googlestyle: {
    color: '#FF0000',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 30,
  },
  Cubebutton:{
    flexDirection: "row",
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#a9a9a9',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10,
        height: 50
  
  },
  cubeText:{
    color: '#15a0eb',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 30,
  },

});
export default styles