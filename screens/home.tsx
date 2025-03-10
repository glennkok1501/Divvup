import ProfileView from "components/ProfileView";
import TripsListView from "components/TripsListView";
import { StyleSheet, View } from "react-native";
import { Paragraph, Separator, Theme, YStack } from "tamagui";

const Home = () => {
    return ( 
        <View style={styles.container}>
            <Theme name="light">
                <YStack flex={1} gap="$5">
                    <ProfileView />
                    <TripsListView />
                </YStack>
            </Theme>

            
        </View>
     );
}
export const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 80
  },
});
export default Home;