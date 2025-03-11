import { H6, View } from "tamagui";

const TransactionView = ({name}: {name: string}) => {
    return ( 
        <View>
            <H6>{name}</H6>
        </View>
     );
}
 
export default TransactionView;