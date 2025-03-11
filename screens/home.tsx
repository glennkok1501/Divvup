import { themes } from '@tamagui/themes';
import ProfileView from 'components/ProfileView';
import RecActListView from 'components/RecActListView';
import TripsListView from 'components/TripsListView';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { Paragraph, Separator, Theme, YStack } from 'tamagui';

const Home = () => {
  const [trips, setTrips] = useState<any[]>([]);
  const [acts, setActs] = useState<any[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const fetchData = () => {
    console.log("data loaded")

    let tripsData = [
      {
        id: 1,
        name: 'Japan Trip',
        membersCount: 6,
        image:
          'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg',
      },
      {
        id: 2,
        name: 'Bangkok with friends',
        membersCount: 4,
        image: 'https://static.independent.co.uk/2025/01/03/14/newFile-12.jpg',
      },
      {
        id: 3,
        name: 'School programme',
        membersCount: 100,
        image: 'https://www.sembawangpri.moe.edu.sg/images/pic2.jpg',
      },
      {
        id: 4,
        name: 'Zoo',
        membersCount: 3,
        image:
          'https://kids.earth.org/wp-content/uploads/2024/05/Untitled-1024-%C3%97-683px-45-900x600.jpg',
      },
    ];
    setTrips(tripsData);

    let actsData = [
      {
        id: 1,
        name: 'Netflex Standard'
      },
    ]
    setActs(actsData)
  }

  useEffect(() => {
    fetchData()
  }, []);


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      fetchData()
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} title="Pull to Refresh" onRefresh={onRefresh} />
      }>
      <View>
        <Theme name="light">
          <YStack flex={1} gap="$8">
            <ProfileView />
            <TripsListView data={trips} />
            <RecActListView data={acts} />

          </YStack>
        </Theme>
      </View>
    </ScrollView>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50,
  },
});
export default Home;
