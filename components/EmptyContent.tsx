import { StyleSheet } from "react-native";
import { Paragraph, View } from "tamagui";

const EmptyContent = ({icon, message}: {icon: any, message: string}) => {
    return ( 
        <View style={styles.style}>
            {icon}
            <Paragraph theme="alt1" size="$5">{message}</Paragraph>
        </View>
     );
}

const styles = StyleSheet.create({
    style: {
        color: "black",
         alignItems: "center",
         justifyContent: "center",
         padding: 20
    }
})

export default EmptyContent;