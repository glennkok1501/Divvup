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
    const [showSplitModal, setShowSplitModal] = useState(false)
    const friends = [
        {id: 0, name: "Alphaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 1, name: "Bravo", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 2, name: "Charlie", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 3, name: "Delta", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 4, name: "Echo", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 5, name: "Foxtrot", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 6, name: "Golf", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 7, name: "Hotel", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 8, name: "India", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 9, name: "Kilo", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 10, name: "Lima", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},

    ]

    const calTotal = (amount: number, selectedFriends: number, billing: number) => {
        switch (billing) {
            case 0: // Split equally
                setTotal(amount / (selectedFriends + 1));
                break;
            case 1: 
                setTotal(amount)
                setShowSplitModal(true)
            case 2: 
                // setTotal(amount)
                // setShowSplitModal(true)
                
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
        if (total < 1) {
            setSubmit(false)
        }
    }, [amount, billing, selectedFriends]);
    
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <YStack marginBottom="$3" gap="$6">
                    <AddTitle title={title} setTitle={setTitle} />

                    <AddAmount currency={currency} setCurrency={setCurrency} amount={amount} setAmount={setAmount} />

                    <SplitWithFriends friends={friends} selected={selectedFriends} setSelected={setSelectedFriends} />

                    <AddBilling billing={billing} setBilling={setBilling} disabled={!(amount > 0 && selectedFriends.length > 0)} />

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
            <SplitAmtModal setBilling={setBilling} show={showSplitModal} setShow={setShowSplitModal} total={total} setTotal={setTotal} friends={friends} selectedFriends={selectedFriends} />
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
