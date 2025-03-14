import {
  H4,
  XStack,
  YStack,
} from 'tamagui';
import TripCard from './TripCard';
import { Plane } from 'lucide-react-native';
import EmptyContent from './EmptyContent';
import { ScrollView } from 'react-native';

const TripsListView = ({ data }: { data: any }) => {
  return (
    <YStack gap="$3">
      <XStack alignItems="center" justifyContent="space-between">
        <H4 fontWeight="500">Trips</H4>
        
      </XStack>

        {!data.length && <EmptyContent icon={<Plane color="grey" size="40" />} message="Planning for your next trip?"/>}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((trip: any) => (
          <TripCard
            key={trip.id}
            name={trip.name}
            membersCount={trip.membersCount}
            image={trip.image}
          />
        ))}
      </ScrollView>
    </YStack>
  );
};

export default TripsListView;
