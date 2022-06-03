import { StyleSheet } from 'react-native';
import { COLORS } from '../Textinput/colour';

const styles = StyleSheet.create(
    {
        TopHeader: {
            width: '98%',
            height: 60,
            borderRadius:7, 
            backgroundColor: COLORS.white,
            justifyContent: 'space-between', alignItems: 'center',
            flexDirection: 'row',
            margin:4,
            
            
        },
        backImg: {
            width: 30, height: 20,
            marginLeft: 20,
            
        },
        title: {
             
            color: COLORS.black,
            fontSize: 20
        }


    }
)


export default styles;