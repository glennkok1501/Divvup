import { View } from "react-native";
import { SizableText, RadioGroup, YStack, XStack, Label } from "tamagui";
import { BillingOptions } from "./BillingOptions";

const AddBilling = ({billing, setBilling, disabled }: {billing: number, setBilling: any; disabled: boolean }) => {
    const billOptions = BillingOptions;

    return (
        <View>
            <SizableText size="$5">Split by</SizableText>
            <RadioGroup 
                aria-labelledby="Select one item" 
                defaultValue="0" 
                value={billing.toString()}
                name="form" 
                onValueChange={(e) => setBilling(parseInt(e))}
                disabled={disabled} // Disable entire radio group
            >
                <YStack width="100%" flexDirection="column" gap="$2">
                    {billOptions.map((option, index) => {
                        if (index % 2 === 0) {
                            // Group two radio buttons in a row
                            return (
                                <XStack key={index} width="100%" gap="$2" justifyContent="space-between">
                                    {/* First radio button */}
                                    <RadioGroupItemWithLabel
                                        size="$4"
                                        value={index.toString()}
                                        label={option.title}
                                        disabled={disabled}
                                    />
                                    {/* Second radio button */}
                                    {billOptions[index + 1] && (
                                        <RadioGroupItemWithLabel
                                            size="$4"
                                            value={(index + 1).toString()}
                                            label={billOptions[index + 1].title}
                                            disabled={disabled}
                                        />
                                    )}
                                </XStack>
                            );
                        }
                        return null; // Don't return anything if it's an odd index
                    })}
                </YStack>
            </RadioGroup>
        </View>
    );
};

export function RadioGroupItemWithLabel(props: {
    size: string;
    value: string;
    label: string;
    disabled?: boolean;
}) {
    const id = `radiogroup-${props.value}`;
    return (
        <XStack alignItems="center" gap="$3" width="48%">
            <RadioGroup.Item value={props.value} id={id} size={props.size} disabled={props.disabled}>
                <RadioGroup.Indicator />
            </RadioGroup.Item>

            <Label size={props.size} htmlFor={id}>
                <SizableText>{props.label}</SizableText>
            </Label>
        </XStack>
    );
}

export default AddBilling;
