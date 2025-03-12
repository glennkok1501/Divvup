import CustomSelector from "components/customSelector/CustomSelector";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Input, Label, RadioGroup, RadioGroupItemFrame, SizableText, View, XStack, YStack } from "tamagui";
import { Currencies } from "./Currencies";
import { BillingOptions } from "./BillingOptions";
import SplitWithFriends from "./SplitWithFriends";
import AddTitle from "./AddTitle";
import AddBilling from "./AddBilling";
import AddAmount from "./AddAmount";

const SplitBill = () => {

    const [currency, setCurrency] = useState('SGD')
    const [billing, setBilling] = useState(0)

    return ( 
        <YStack gap="$6">
            
            <AddTitle />

            <AddAmount currency={currency} setCurrency={setCurrency} />

            <SplitWithFriends />

            <AddBilling />
            
        </YStack>
     );
}



export default SplitBill;