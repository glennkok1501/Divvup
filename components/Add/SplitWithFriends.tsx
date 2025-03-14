import SearchBar from "components/SearchBar";
import { Check } from "lucide-react-native";
import { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, SizableText } from "tamagui";

const SplitWithFriends = ({friends, selected, setSelected}: {friends: any, selected: any, setSelected: any}) => {

        const [filtered, setFiltered] = useState(friends)

        const onSelectHandler = (id: number) => {
            setSelected((prevSelected: number[]) =>
                prevSelected.includes(id)
                    ? prevSelected.filter((item) => item !== id) // Remove if already selected
                    : [...prevSelected, id] // Add if not selected
            );
        };

        const splitText = (n: number) => {
            if (n == 1) {
                return "1 person"
            }
            else if (n < 1) {
                return "no one"
            }
            return `${n} people`
        }

        return ( 
        <View>
            <SizableText style={{marginEnd: 5}} size="$5">{`Split with ${splitText(selected.length)}`}</SizableText>
            <View style={{flexGrow: 1}}>
                <SearchBar data={friends} setFiltered={setFiltered} />
            </View>

            <FlatList
                style={{marginTop: 15}}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={filtered}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => {
                        onSelectHandler(item.id)
                    }} style={{justifyContent: "center", alignItems: "center", width:75}}>
                        {selected.includes(item.id) && <Check size="15" style={styles.check} color="white" />}
                        <Image
                            src={item.avatar}
                            style={[selected.includes(item.id) && styles.selectedBubble, styles.friendsBubble]}
                        />
                        <SizableText theme="alt1" size="$2" numberOfLines={1}>{item.name}</SizableText>
                    </TouchableOpacity>}
                keyExtractor={(item, index) => index.toString()}
            />
            
        </View>
     );
}

const styles = StyleSheet.create({
    check: {
        position: "absolute",
        right: 8,
        top: 2,
        zIndex: 1,
        backgroundColor: "green",
        borderRadius: 25,
    },
    search: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    friendsBubble: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    selectedBubble: {
        borderWidth: 4,
        borderColor: "green"
    }
})
 
export default SplitWithFriends;