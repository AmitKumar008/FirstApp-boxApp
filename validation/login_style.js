import { StyleSheet } from 'react-native'
import { COLORS } from '../commoncode/Textinput/colour';
 
const styles = StyleSheet.create({
    topheader:{
        height: '100%', 
        backgroundColor: '#e8effa', 
        marginBottom: 10
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.white,
        justifyContent: 'center',
        marginLeft: 12,

    },
    firstname:{
        flexDirection:'row',
        marginBottom:13,marginTop:'3%'
         
    },
    data:{
        width:'49.5%',
        marginRight:10,
         
    },
    lastName:{
        width:'48%',
        justifyContent:'center',
        alignContent:'center',
    },
    input: {
        width: '100%',
        height:50,
        marginLeft: 10,
        color: COLORS.white,
        fontSize: 30,
        borderColor: COLORS.white,
    },
    inputView: {
    
        height: 60,
        fontSize: 18,
        borderColor: COLORS.black,
       // borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        marginBottom: '7%'
    
    },
   
    submit: {
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: '#474d57',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 20,
        padding: 10,
        width: '95%',
        justifyContent: "space-around",
        height: 50,
        textAlign: "center",
        margin: 10,
        marginTop: 10,
        marginBottom:"5%",

    },
    submitstyle: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,

    },
    topView: {
        width: '90%',
        marginLeft: 'auto', marginRight: 'auto',
        marginTop: '8%',
    },
    scrollView: {
        paddingVertical: 10,
        backgroundColor: '#000',
    },
    
});

export default styles;