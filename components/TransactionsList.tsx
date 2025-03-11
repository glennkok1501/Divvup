import { ScrollView } from 'tamagui';
import TransactionView from './TransactionView';

const TransactionsList = ({ data }: { data: any }) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {data.map((transaction: any) => (
        <TransactionView key={transaction.id} name={transaction.name} date={transaction.date} amount={transaction.amount} />
      ))}
    </ScrollView>
  );
};

export default TransactionsList;
