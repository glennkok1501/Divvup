import SearchBar from "components/SearchBar";
import { Check } from "lucide-react-native";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, SizableText } from "tamagui";

const SplitWithFriends = ({friends, selected, setSelected}: {friends: any, selected: any, setSelected: any}) => {

        const [filtered, setFiltered] = useState(friends)

        const onSelectHandler = (friend: any) => {
            setSelected((prevSelected: any) => {
                const isSelected = checkSelected(prevSelected, friend.id);
                if (isSelected) {
                    // Remove if already selected
                    return prevSelected.filter((item: any) => item.id !== friend.id);
                } else {
                    // Add if not selected, with amount key
                    return [...prevSelected, {...friend, amount: 0}];
                }
            });
        };

        const checkSelected = (friends: any, id: number) => {
            return friends.some((friend: any) => friend.id === id); // Use `some` to check if friend is already selected
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

        useEffect(() => {
            setFiltered(friends);
        }, [friends]);

        // useEffect(() => {
        //     console.log('Selected Friends:', selected);
        // }, [selected]);

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
                        onSelectHandler(item)
                    }} style={{justifyContent: "center", alignItems: "center", width:75}}>
                        {checkSelected(selected, item.id) && <Check size="15" style={styles.check} color="white" />}
                        <Image
                            src={item.avatar}
                            style={[checkSelected(selected, item.id) && styles.selectedBubble, styles.friendsBubble]}
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