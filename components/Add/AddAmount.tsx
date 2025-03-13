import CustomSelector from "components/customSelector/CustomSelector";
import { StyleSheet, View } from "react-native";
import { SizableText, Input } from "tamagui";
import { Currencies } from "./Currencies";

const AddAmount = ({currency, setCurrency, amount, setAmount}: {currency: any, setCurrency: any, amount: any, setAmount: any}) => {
    const currencies = Currencies
    
    return ( 
        <View>
            <SizableText size="$5">Amount</SizableText>
            <View style={styles.amountRow}>
            <View style={{flexGrow: 1}}>
                    <Input
                        keyboardType="numeric"
                        placeholder="0.00"
                        selectionColor="black"
                        value={amount}
                        onChange={(e) => {
                            setAmount(parseFloat(e.nativeEvent.text))
                        }}
                    />
                </View>
                <CustomSelector setData={setCurrency} placeholder={currency} options={currencies.map(item => item.currency)} />
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    amountRow: {
        flexDirection: "row"
    }
})

export default AddAmount;