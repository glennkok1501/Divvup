import { Pressable, StyleSheet } from 'react-native';
import {
  Button,
  H3,
  H4,
  Paragraph,
  ScrollView,
  SizableText,
  Text,
  View,
  XStack,
  YStack,
} from 'tamagui';
import TripCard from './TripCard';
import { useEffect, useState } from 'react';
import { Plane, Plus } from 'lucide-react-native';
import { themes } from '@tamagui/themes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EmptyContent from './EmptyContent';

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
