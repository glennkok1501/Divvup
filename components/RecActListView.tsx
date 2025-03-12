import { Pressable } from 'react-native';
import { H4, SizableText, XStack, YStack } from 'tamagui';
import TransactionsList from './TransactionsList';
import EmptyContent from './EmptyContent';
import { Receipt } from 'lucide-react-native';
import TransactionView from './TransactionView';

const RecActListView = ({ data }: { data: any }) => {
  return (
    <YStack>
      <XStack alignItems="center" justifyContent="space-between">
        <H4 fontWeight="500">Recent Activities</H4>
        <Pressable>
          <SizableText size="$3" theme="alt1">
            View All
          </SizableText>
        </Pressable>
      </XStack>
      {!data.length && <EmptyContent icon={<Receipt color="grey" size="40" />} message="Let's Divvup the bill :)"/>}

      {data.map((transaction: any) => (
        <TransactionView key={transaction.id} name={transaction.name} date={transaction.date} amount={transaction.amount} />
      ))}
    </YStack>
  );
};

export default RecActListView;
