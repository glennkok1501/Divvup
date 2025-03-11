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
import { Plus } from 'lucide-react-native';
import { themes } from '@tamagui/themes';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TripsListView = ({ data }: { data: any }) => {
  return (
    <YStack gap="$3">
      <XStack alignItems="center" justifyContent="space-between">
        <H4 fontWeight="500">Trips</H4>
        <TouchableOpacity>
          <Text style={styles.addBtn}>
            <Plus size="15" color={themes.light.color} />
          </Text>
        </TouchableOpacity>
      </XStack>
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

const styles = StyleSheet.create({
  addBtn: {
    backgroundColor: themes.light.background,
    color: themes.light.color,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: themes.light.color,
    borderWidth: 1,
    paddingEnd: 10,
    paddingStart: 10,
  },
});

export default TripsListView;
