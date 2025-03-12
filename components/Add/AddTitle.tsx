import { View } from "react-native";
import { SizableText, Input } from "tamagui";

const AddTitle = () => {
    return ( 
        <View>
            <SizableText size="$5">Title</SizableText>
            <Input
                placeholder="E.g. Lunch"
            />
        </View>
     );
}
 
export default AddTitle;