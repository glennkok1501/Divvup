import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CustomPageNav = ({components, headers}: {components: any, headers: any}) => {
    
    const [selected, setSelected] = useState(0)
    
    const selectComponent = (s: string) => {
        for (var i = 0; i < headers.length; i++) {
            if (headers[i] == s) {
                setSelected(i)
            }
        }
    }

    return ( 
        <View style={styles.navigator}>
            <View style={styles.tabsRow}>
                {
                    headers.map((header: string) => (
                        <Pressable onPress={() => selectComponent(header)} style={[{width: `${100/headers.length}%`}, styles.tab, headers[selected] == header && styles.selected]} key={header}>
                            <Text style={[styles.tabText, headers[selected] == header && styles.selected]}>
                                {header}
                            </Text>
                        </Pressable>
                    ))
                }
            </View>
            <View style={styles.page}>
                {components[selected]}
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    navigator: {
        flex: 1,
    },
    tabsRow: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    tab: {
        
        padding: 10,
        flexGrow: 1,
        alignItems: "center",
    },
    selected: {
        color: "white",
        borderRadius: 25,
        backgroundColor: "black",
    },
    tabText: {
        fontSize: 14,
        color: "black"
    },
    page: {
        padding: 5,
        marginTop: 10
    }
})
 
export default CustomPageNav;