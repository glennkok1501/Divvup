import { themes } from "@tamagui/themes";
import { Plus } from "lucide-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const TripAddBtn = () => {
    return ( 
        <TouchableOpacity>
          <View style={styles.addBtn}>
            <Plus size="15" color={themes.light.color} />
          </View>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    addBtn: {
      backgroundColor: themes.light.background,
      color: themes.light.color,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: themes.light.color,
      borderWidth: 1,
      padding: 5,
      width: 30,
      height: 30
    },
  });
 
export default TripAddBtn;