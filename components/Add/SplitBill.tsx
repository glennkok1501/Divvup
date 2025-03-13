import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SizableText, XStack, YStack } from "tamagui";
import SplitWithFriends from "./SplitWithFriends";
import AddTitle from "./AddTitle";
import AddBilling from "./AddBilling";
import AddAmount from "./AddAmount";
import CustomButton from "components/CustomButton";

const SplitBill = () => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0.00)
    const [currency, setCurrency] = useState('SGD')
    const [billing, setBilling] = useState(0)
    const [selectedFriends, setSelectedFriends] = useState<any>([]);
    const [total, setTotal] = useState(0.0)

    const calTotal = (amount: number, selectedFriends: number, billing: number) => {
        console.log(selectedFriends)
        switch(billing) {
            case 0:
              setTotal(amount / (selectedFriends + 1))
              break;
            case 1:
              break;
            default:
              setTotal(amount)
          }
    }

    useEffect(() => {

        if (amount > 0 && selectedFriends.length > 0){
            calTotal(amount, selectedFriends.length, billing)
        }
        else {
            setTotal(0.0)
        }
    }, [amount, billing, selectedFriends])

    return ( 
        <ScrollView
            showsVerticalScrollIndicator={false}>
            <YStack gap="$6">
            
                <AddTitle title={title} setTitle={setTitle}  />

                <AddAmount currency={currency} setCurrency={setCurrency} amount={amount} setAmount={setAmount} />

                <SplitWithFriends selected={selectedFriends} setSelected={setSelectedFriends} />

                    <AddBilling setBilling={setBilling} />
                    
                    <View>
                        <SizableText size="$5">You pay</SizableText>
                        <View style={styles.totalAmt}>
                        <View style={{flexDirection: "row", alignItems: "baseline", justifyContent: "flex-end"}}>
                            <SizableText size="$9" numberOfLines={1}>
                                {total.toFixed(2)}
                            </SizableText>
                            <SizableText size="$4">
                            {currency}
                            </SizableText>
                        </View>
                    </View>
                    
                        
                    </View>
            
                <CustomButton onPress={''} title="Submit" />
                
            </YStack>

        </ScrollView>
        
     );
}

const styles = StyleSheet.create({
    totalAmt: {
        borderWidth: 1.2,
        borderRadius: 10,
        padding: 10,
        backgroundColor: ""
    }
})


export default SplitBill;