import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SizableText, YStack } from "tamagui";
import SplitWithFriends from "./SplitWithFriends";
import AddTitle from "./AddTitle";
import AddBilling from "./AddBilling";
import AddAmount from "./AddAmount";
import CustomButton from "components/CustomButton";
import SplitAmtModal from "./SplitAmtModal";

const SplitBill = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0.00);
    const [currency, setCurrency] = useState('SGD');
    const [billing, setBilling] = useState(0);
    const [selectedFriends, setSelectedFriends] = useState<any>([]);
    const [total, setTotal] = useState(0.0);
    const [submit, setSubmit] = useState(false);

    const calTotal = (amount: number, selectedFriends: number, billing: number) => {
        switch (billing) {
            case 0: // Split equally
                setTotal(amount / (selectedFriends + 1));
                break;
            case 1: // Paid for everyone
                // Set total to full amount
                break;
            case 2: // Paid for everyone
                // Set total to full amount
                setTotal(amount);
                break;
            default: // Custom or unknown cases
                setTotal(amount);
        }
        setSubmit(true);
    };
    

    useEffect(() => {
        if (amount > 0 && selectedFriends.length > 0) {
            calTotal(amount, selectedFriends.length, billing);
        } else {
            setTotal(0.0); // Ensure total is always defined
            setSubmit(false);
        }
    }, [amount, billing, selectedFriends]);
    
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <YStack marginBottom="$3" gap="$6">
                    <AddTitle title={title} setTitle={setTitle} />

                    <AddAmount currency={currency} setCurrency={setCurrency} amount={amount} setAmount={setAmount} />

                    <SplitWithFriends selected={selectedFriends} setSelected={setSelectedFriends} />

                    <AddBilling setBilling={setBilling} disabled={!(amount > 0 && selectedFriends.length > 0)} />

                    <View>
                        <SizableText size="$5">You pay</SizableText>
                        <View style={styles.totalAmt}>
                            <View style={{ flexDirection: "row", alignItems: "baseline", justifyContent: "flex-end" }}>
                                <SizableText size="$9" numberOfLines={1}>
                                    {Math.round((total ?? 0) * 100) / 100}
                                </SizableText>
                                <SizableText size="$4">{currency}</SizableText>
                            </View>
                        </View>
                    </View>

                    <CustomButton disabled={!submit} onPress={() => console.log("Submitted")} title="Submit" />
                </YStack>
            </ScrollView>
            <SplitAmtModal />
        </>
    );
};

const styles = StyleSheet.create({
    totalAmt: {
        borderWidth: 1.2,
        borderRadius: 10,
        padding: 10,
    },
});

export default SplitBill;
