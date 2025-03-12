import SearchBar from "components/SearchBar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SizableText } from "tamagui";

const SplitWithFriends = () => {

    const friends: any[] = []
    const [filtered, setFiltered] = useState(friends)

    return ( 
        <View>
            <View style={styles.search}>
                <SizableText style={{marginEnd: 5}} size="$5">Split with</SizableText>
                <View style={{flexGrow: 1}}>
                    <SearchBar data={friends} setFiltered={setFiltered} />
                </View>
            </View>
            
        </View>
     );
}

const styles = StyleSheet.create({
    search: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})
 
export default SplitWithFriends;