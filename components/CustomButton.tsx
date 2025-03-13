import { themes } from "@tamagui/themes";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({onPress, title}: {onPress: any, title: string}) => {
    return ( 
        <TouchableOpacity style={styles.btn}>
            <Text 
                style={styles.btnText}
            >{title}</Text>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: themes.dark.background,
        padding: 13,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    btnText: {
        fontSize: 14,
        color: themes.dark.color,

    }
})
 
export default CustomButton;