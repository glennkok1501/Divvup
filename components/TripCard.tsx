import { themes } from '@tamagui/themes';
import { Users } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image, SizableText } from 'tamagui';
import MembersCountShorterner from './MembersCountShorterner';
const TripCard = ({
  name,
  membersCount,
  image,
}: {
  name: string;
  membersCount: number;
  image: string;
}) => {

  const styles = StyleSheet.create({
    card: {
      borderRadius: 20,
      marginEnd:30,
      width: 200,
    },
    imageBg: {
      borderRadius: 20,
    },
    members: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'row',
      borderRadius: 25,
      padding: 10,
      width: 'auto',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 5,
      position: "absolute",
      right: 5,
      top: 70,
    },
    title: {
      backgroundColor: 'rgba(0, 0, 0, 0.54)',
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
    },
  });

  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image
            style={styles.imageBg}
            objectFit="cover"
            alignSelf="center"
            source={{
              width: 200,
              height: 110,
              uri: image,
            }}
          />
        
      <SizableText size="$5" fontWeight="300" marginStart="$2" paddingEnd="$2" numberOfLines={1}>
        {name}
      </SizableText>
      <View style={styles.members}>
            <SizableText marginEnd="$2" size="$5" fontWeight="400" color={themes.light.color}>
              {MembersCountShorterner(membersCount)}
            </SizableText>
            <Users size="15" color={themes.light.color} />
          </View>
      </View>
    </TouchableOpacity>
  );
};

export default TripCard;
