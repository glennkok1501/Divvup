import { TouchableOpacity } from 'react-native-gesture-handler';
import { H6, Paragraph, SizableText, View, XStack } from 'tamagui';

const TransactionView = ({ name, date, amount }: { name: string, date: string, amount: number }) => {
  return (
    <TouchableOpacity>
      <XStack marginBottom="$2" padding="$2" justifyContent="space-between" alignItems="center">
        <View>
          <Paragraph>{name}</Paragraph>
          <SizableText theme="alt1">{date}</SizableText>
        </View>
        <SizableText size="$4">{`$${amount}`}</SizableText>
      </XStack>
    </TouchableOpacity>
  );
};

export default TransactionView;
