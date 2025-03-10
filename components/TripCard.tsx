/* eslint-disable prettier/prettier */
import { themes } from "@tamagui/themes";
import { Users } from "lucide-react-native";
import { Pressable, StyleSheet, View } from "react-native";
import { Card, H4, Image, SizableText, XStack } from "tamagui";

const TripCard = ({ name, membersCount, image }: { name: string, membersCount: number, image: string }) => {

  const membersCountShort = (count: number) => {
    if (count > 99) {
      return "99+"
    }
    return String(count)
  }

  const styles = StyleSheet.create({
    card: {
      backgroundColor: "white",
      width: 200,
      height: 180,
      borderRadius: 20
    },
    members: {
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "row",
      borderRadius: 25,
      padding: 10,
      width: "auto",
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 5
    },
    title: {
      backgroundColor: "rgba(0, 0, 0, 0.54)",
      borderTopEndRadius: 20,
      borderTopStartRadius: 20
    }
  })

  return (
    <Pressable>
      <Card style={styles.card} marginRight="$3" size="$4" width="200" height="180">
        <Card.Header padded style={styles.title}>
          <H4 color={themes.dark.color} fontWeight="300" numberOfLines={1}>{name}</H4>
        </Card.Header>
        <Card.Footer padded>
          <View style={styles.members}>
            <SizableText marginEnd="$1" size="$5" fontWeight="400" color={themes.light.color}>{membersCountShort(membersCount)}</SizableText>
            <Users size="15" color={themes.light.color} />
          </View>

        </Card.Footer>
        <Card.Background>
          <Image style={styles.card}
            objectFit="cover"
            alignSelf="center"
            source={{
              width: 200,
              height: 180,
              uri: image
            }}
          />
        </Card.Background>
      </Card>
    </Pressable>

  );
}

export default TripCard;