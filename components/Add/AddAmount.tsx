import CustomSelector from "components/customSelector/CustomSelector";
import { StyleSheet, View } from "react-native";
import { SizableText, Input } from "tamagui";
import { Currencies } from "./Currencies";

const AddAmount = ({ currency, setCurrency, amount, setAmount }: { currency: any, setCurrency: any, amount: any, setAmount: any }) => {
    const currencies = Currencies;
    
    const handleAmountChange = (e: any) => {
        let text = e.nativeEvent.text;

        // Ensure only valid numeric input with up to 2 decimal places
        if (/^\d*\.?\d{0,2}$/.test(text) || text === "") {
            setAmount(text); // Keep it as string while typing
        }
    };

    return ( 
        <View>
            <SizableText size="$5">Amount</SizableText>
            <View style={styles.amountRow}>
                <View style={{ flexGrow: 1 }}>
                    <Input
                        keyboardType="decimal-pad" // Allows decimal input on all devices
                        placeholder="0.00"
                        selectionColor="black"
                        value={amount}
                        maxLength={10}
                        onChange={handleAmountChange}
                    />
                </View>
                <CustomSelector 
                    setData={setCurrency} 
                    placeholder={currency} 
                    options={currencies.map(item => item.currency)} 
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    amountRow: {
        flexDirection: "row",
    },
});

export default AddAmount;
