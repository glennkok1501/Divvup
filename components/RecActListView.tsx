import { Pressable } from 'react-native';
import { H4, SizableText, XStack, YStack } from 'tamagui';
import TransactionsList from './TransactionsList';

const RecActListView = ({ data }: { data: any }) => {
  return (
    <YStack gap="$3">
      <XStack alignItems="center" justifyContent="space-between">
        <H4 fontWeight="500">Recent Activities</H4>
        <Pressable>
          <SizableText size="$3" theme="alt1">
            View All
          </SizableText>
        </Pressable>
      </XStack>
      <TransactionsList data={data} />
    </YStack>
  );
};

export default RecActListView;
