import { ChevronDown } from "lucide-react-native";
import { useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

const CustomSelector = ({placeholder, options, setData}: {placeholder: string, options: any, setData: any}) => {
    
    const [showModal, setShowModal] = useState(false)
    
    const selectData = (option: string) => {
        setData(option),
        setShowModal(!showModal)
    }

    return ( 
        <View>
            <TouchableOpacity onPress={() => setShowModal(true)}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>{placeholder}</Text>
                    <ChevronDown size="16" color="black" />
                </View>
            </TouchableOpacity> 

            <Modal
                animationType="fade"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {setShowModal(!showModal)}}
                >

                <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
                    <View style={styles.modalBackground} />
                </TouchableWithoutFeedback>

                    <View style={styles.modal}>
                        <FlatList
                            data={options}
                            renderItem={({item}) => 
                                    <TouchableOpacity onPress={() => selectData(item)}>
                                        <Text style={styles.optionText}>{item}</Text>
                                    </TouchableOpacity>}
                            keyExtractor={(item, index) => index.toString()} 
                            
                        />
                    </View>
            </Modal>
        </View>
     );
}

const styles = StyleSheet.create({
    optionText: {
        fontSize: 16,
        color: "black",
        padding: 7
    },
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.3)"
    },

    modal: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        height: 300,
        width: 300
    },
    btn: {
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        borderColor: "lightgrey"
    },
    btnText: {
        color: "black",
        fontSize: 14,
        marginEnd: 3
    }
})
 
export default CustomSelector;