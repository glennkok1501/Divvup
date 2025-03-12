import { View } from "react-native";
import { SizableText, RadioGroup, YStack, XStack, Label } from "tamagui";
import { BillingOptions } from "./BillingOptions";

const AddBilling = () => {
    const billOptions = BillingOptions

    return ( 
            <View>
                <SizableText size="$5">Split by</SizableText>
                <RadioGroup aria-labelledby="Select one item" defaultValue="0" name="form">
                <YStack width={300} alignItems="center" gap="$1">
                    <RadioGroupItemWithLabel size="$4" value="0" label={billOptions[0].title} />
                    <RadioGroupItemWithLabel size="$4" value="1" label={billOptions[1].title} />
                    <RadioGroupItemWithLabel size="$4" value="2" label={billOptions[2].title} />
                </YStack>
                </RadioGroup>
                
            </View>
     );
}

export function RadioGroupItemWithLabel(props: {
    size: string
    value: string
    label: string
  }) {
    const id = `radiogroup-${props.value}`
    return (
      <XStack width={300} alignItems="center" gap="$3">
        <RadioGroup.Item value={props.value} id={id} size={props.size}>
          <RadioGroup.Indicator />
        </RadioGroup.Item>
  
        <Label size={props.size} htmlFor={id}>
          {props.label}
        </Label>
      </XStack>
    )
  }
 
export default AddBilling;