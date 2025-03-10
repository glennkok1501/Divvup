import ProfileView from 'components/ProfileView';
import TripsListView from 'components/TripsListView';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useUserStore } from 'store/store';
import { Text, Theme, YStack } from 'tamagui';

const Home = () => {

  const user = useUserStore((state) => state.user)
  const setUser = useUserStore((state) => state.setUser)
  
  useEffect(() => {
    if (user == null){
      setUser({"id": 1, "username": "John Smith", "friendsCount": 123123})
      console.log(user)
    }
  }, [user])

  return (
    <View style={styles.container}>
      <Theme name="light">
        {
          (user == null) ? 
          <View><Text>Not found</Text></View> 
          :
          <YStack flex={1} gap="$5">
            <ProfileView user={user} />
            <TripsListView />
          </YStack>
        }
        
      </Theme>
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 80,
  },
});
export default Home;
