import { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, Modal, Image, TouchableOpacity } from 'react-native';
import { YStack, Input } from 'tamagui';
import { ChevronLeft } from 'lucide-react-native';
import CustomButton from 'components/CustomButton';

const SplitAmtModal = ({show, setShow, total, setTotal, friends, selectedFriends, setBilling}: {show: boolean, setShow: any, total: number, setTotal: any, friends: any, selectedFriends: any, setBilling: any}) => {
    useEffect(() => {
        setAmts(getAmts());
        setOverallTotal(0)
    }, [selectedFriends, total]);

    const handleClose = () => {
        setShow(false);
        setBilling(0);
    };

    const getAmts = () => {
        return friends.filter((f:any) => selectedFriends.includes(f.id)).map((f: any) => ({
            id: f.id,
            name: f.name,
            avatar: f.avatar,
            amount: 0
        }));
    };

    const setUserAmt = (id: number, amount: number) => {
        let updated = amts.map((f: any) => ({
            ...f,
            amount: f.id === id ? (!amount ? 0 : amount) : f.amount
        }));
        setAmts(updated);
        setOverallTotal(updated.reduce((sum: number, f: any) => sum + f.amount, 0));
    };

    const getAmt = (id: number) => {
        return amts.find((f: any) => f.id === id)?.amount || 0;
    };

    const handleSubmit = () => {
        setTotal(total-overallTotal)
        setShow(false);
    }

    const [amts, setAmts] = useState(getAmts());
    const [overallTotal, setOverallTotal] = useState(0);

    return (
        <Modal animationType="slide" visible={show} onRequestClose={handleClose}>
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <YStack style={{ flex: 1 }}>
                        <View style={styles.totalCard}>
                            <Text style={{fontSize: 20, textAlign: "right", color: overallTotal > total ? "red" : "black"}}>{overallTotal}</Text>
                            <Text style={{marginTop: 10, fontSize: 16, textAlign: "right", color: "grey"}}>{total}</Text>
                        </View>
                        <ScrollView style={styles.scrollView}>
                            {amts.map((f: any) => (
                                <View style={styles.friendsView} key={f.id}>
                                    <View style={{width: 80, alignItems: "center"}}>
                                        <Image style={styles.friendsBubble} source={{ uri: f.avatar }} />
                                        <Text numberOfLines={1}>{f.name}</Text>
                                    </View>
                                    <Input
                                        selectionColor="black"
                                        backgroundColor="black"
                                        value={String(getAmt(f.id))}
                                        onChangeText={text => setUserAmt(f.id, parseFloat(text) || 0)}
                                        maxLength={10}
                                        keyboardType="decimal-pad"
                                        placeholder='0.00'
                                        style={styles.amtInput}
                                    />
                                </View>
                            ))}
                        </ScrollView>
                        <View style={styles.backButton}>
                        <TouchableOpacity onPress={handleClose}>
                            <ChevronLeft size="30" color="black" />
                            
                        </TouchableOpacity>
                        <View style={{flexGrow: 1, marginStart: 30}}>
                                <Text style={{textAlign: "center", color: "grey", margin: 5}}>You would pay</Text>
                                <CustomButton onPress={() => handleSubmit()} title={`${total-overallTotal}`} />
                            </View>
                        </View>
                        
                    </YStack>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 24,
        marginTop: 50,
    },
    modalView: {
        flex: 1,
        padding: 16,
    },
    totalCard: {
        padding: 16,
        borderWidth: 1,
        borderRadius: 15,
    },
    scrollView: {
        flex: 1,
    },
    friendsView: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: "space-between",
    },
    friendsBubble: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    amtInput: {
        backgroundColor: "transparent",
        width: "50%",
        height: "60%",
    },
    backButton: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center"
    },
});

export default SplitAmtModal;