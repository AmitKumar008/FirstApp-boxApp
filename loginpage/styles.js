import { StyleSheet } from 'react-native'

import { COLORS } from '../../Boxcode/commoncode/Textinput/colour';
const styles = StyleSheet.create({
    mainsyle: {
        flex:1,
        backgroundColor: "black",
        width: '100%',
        height: '100%'

    },
    input: {
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        color: COLORS.white,
        fontSize: 15
    },
    topView: {
        width: '90%',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 20,
        fontSize: 15,
         


    },
    logo1: {
        justifyContent: 'center',
        alignContent: 'center',
        width: '95%',
        height: '40%',
        marginBottom: 0,
        marginTop: 10,
    },


    loginstyle: {
        alignItems: 'center',
        backgroundColor: '#1b1e24',
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
        marginTop: '5%'

    },
    loginbox: {

        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    footer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        padding: 3,
        // textDecorationLine:"underline",
        // textDecorationStyle:"solid",
         
         

    },
    forgotstyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        textDecorationLine: "underline",
        // textDecorationStyle:"solid",
        // textShadowColor:"white"

    },
    footer2: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        padding: 3,
    },
    forgotstyle2: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },

});
export default styles