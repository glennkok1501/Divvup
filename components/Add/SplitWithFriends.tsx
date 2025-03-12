import SearchBar from "components/SearchBar";
import { Check } from "lucide-react-native";
import { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, SizableText } from "tamagui";

const SplitWithFriends = () => {

    const friends = [
        {id: 0, name: "Alphaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 1, name: "Bravo", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 2, name: "Charlie", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 3, name: "Delta", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 4, name: "Echo", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 5, name: "Foxtrot", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 6, name: "Golf", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 7, name: "Hotel", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 8, name: "India", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 9, name: "Kilo", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},
        {id: 10, name: "Lima", avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},

    ]
        const [filtered, setFiltered] = useState(friends)
        const [selected, setSelected] = useState<any>([]);

        const onSelectHandler = (id: number) => {
            setSelected((prevSelected: number[]) =>
                prevSelected.includes(id)
                    ? prevSelected.filter((item) => item !== id) // Remove if already selected
                    : [...prevSelected, id] // Add if not selected
            );
        };

        return ( 
        <View>
            <View style={styles.search}>
                <SizableText style={{marginEnd: 5}} size="$5">Split with</SizableText>
                <View style={{flexGrow: 1}}>
                    <SearchBar data={friends} setFiltered={setFiltered} />
                </View>
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
                        <Check size="30" style={styles.check} color="green" />
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
        right: 0,
        top: 0,
        zIndex: 1,
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