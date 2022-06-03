import { StyleSheet } from 'react-native'
import { COLORS } from '../Textinput/colour';

const styles = StyleSheet.create(
    {
        inputView: {
            height: 50,
            borderColor: COLORS.blue,
            borderWidth: 1,
            borderRadius: 10,
            width: '100%',
            marginBottom: '5%',
            //fontSize:12
        },
        Selectedsignup: {
            width: '90%',
            
            height: 50,
            borderWidth: 1,
            alignSelf: 'center', 
            justifyContent: 'center',
            borderColor: COLORS.black, 
            borderRadius: 8,
            backgroundColor: COLORS.white,
            marginTop:20
        },
        Selectedsignup2: {
            width: '80%',
            height: 40,
            borderWidth: 1,
            alignSelf: 'center', justifyContent: 'center',
            borderColor: COLORS.white, borderRadius: 8,
            backgroundColor: COLORS.white
        },
        textstyles: {
            width: '96%',
            fontSize: 16,
            marginLeft: 10, fontFamily: 'Roboto-Regular', color: COLORS.black
        },
        textstyles2: {
            width: '86%',
            fontSize: 14,
            marginLeft: 10,
             fontFamily: 'Roboto-Regular', color: COLORS.black
        },
        signup_fieldview: {
            width: '100%',
            height: 40,
            borderWidth: 1,
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: '2%', borderColor: COLORS.white,
            borderRadius: 8, backgroundColor: COLORS.white
            , maxHeight: '20%'
        }
    }
)

export default styles;