import { View } from "react-native";
import { SizableText, Input } from "tamagui";

const AddTitle = ({title, setTitle}: {title: any, setTitle: any}) => {

    return ( 
        <View>
            <SizableText size="$5">Title</SizableText>
            <Input
                placeholder="E.g. Lunch"
                selectionColor="black"
                value={title}
                onChange={(e) => setTitle(e.nativeEvent.text)}
                
            />
        </View>
     );
}
 
export default AddTitle;