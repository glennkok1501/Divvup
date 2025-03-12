import { StyleSheet, TouchableOpacity } from "react-native";
import { H5, Image, SizableText, View, XStack } from "tamagui";
import MembersCountShorterner from "./MembersCountShorterner";

const TripsView = ({trip}: {trip: any}) => {
    return ( 
        <TouchableOpacity>
            <XStack style={styles.card}>
                <Image
                    style={styles.imageBg}
                    objectFit="cover"
                    alignSelf="center"
                    source={{
                        width: 100,
                        height: 100,
                        uri: trip.image,
                    }}
                    /> 
                <View padding="$3">
                    <SizableText size="$6" fontWeight="300" numberOfLines={1}>
                        {trip.name}
                    </SizableText>
                    <SizableText size="$3" theme="alt1">
                        {`${MembersCountShorterner(trip.membersCount)} Members`}
                    </SizableText>
                </View>
                
            </XStack>
        </TouchableOpacity>
        
     );
}
const styles = StyleSheet.create({
    card: {
    borderRadius: 20,
    marginVertical: 20
    },
    imageBg: {
    borderRadius: 30,
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
export default TripsView;