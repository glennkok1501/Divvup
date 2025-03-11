import { ScrollView } from 'tamagui';
import TransactionView from './TransactionView';

const TransactionsList = ({ data }: { data: any }) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {data.map((transaction: any) => (
        <TransactionView key={transaction.id} name={transaction.name} />
      ))}
    </ScrollView>
  );
};

export default TransactionsList;
