import { StyleSheet } from 'react-native'
import { COLORS } from '../commoncode/Textinput/colour';
const styles = StyleSheet.create({
    topheader: {
        height: '100%',
        backgroundColor: '#000',
        marginBottom: 10
    },
    firstname: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
         marginTop: '5%', 
        // marginLeft: 1

    },
    data: {
        width: '49.9%', marginRight: 5
    },
    lastName: {
        width: '49%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.white,
        justifyContent: 'center',
        marginLeft: 12,

    },
    headbar: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.white,
        textAlign: 'auto',
        justifyContent: 'center',
        marginTop: 30,
        marginLeft: 10,
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 50,
        marginLeft: 10,
        color: COLORS.white,
        fontSize: 30,
        borderColor: COLORS.white,
    },
    passInput: {
        width: '100%',
        height: 50,
        marginLeft: 10,
        color: COLORS.white,
        fontSize: 30,
        borderColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    passInputconf: {
        width: '100%',
        height: 50,
        marginLeft: 10,
        color: COLORS.white,
        fontSize: 30,
        borderColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputView: {

        height: 60,
        fontSize: 18,
        borderColor: COLORS.black,
        // borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        marginBottom: '0.2%'

    },
    submit: {
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: '#1195ed',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20,
        padding: 10,
        width: '95%',
        justifyContent: "space-around",
        height: 50,
        textAlign: "center",
        margin: 10,
        marginTop: 30,
        marginBottom:"5%",

    },
    submitstyle: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,

    },
    scrollView: {
        paddingVertical: 10,
        backgroundColor: '#000',
    },
    topView: {
        width: '90%',
        marginLeft: 'auto', marginRight: 'auto',
        marginTop: '8%',
    }


});

export default styles;