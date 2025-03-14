import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Text, Modal, Image } from 'react-native';
import { SizableText, YStack, XStack, Sheet, Button, Checkbox, Input } from 'tamagui';
import { ChevronDown, ChevronUp, X } from 'lucide-react-native';

const SplitAmtModal = ({show, setShow, setTotal, friends, selectedFriends}: {show: boolean, setShow: any, setTotal: any, friends: any, selectedFriends: any}) => {

    const handleClose = () => {
        setTotal(0)
        setShow(false)
    }

  return (
    <Modal
    animationType="slide"
    visible={show}
    onDismiss={handleClose}
    onRequestClose={handleClose}>
        <View style={styles.container}>
            <View style={styles.modalView}>
            <ScrollView>
                <YStack>
                {
                    friends.map((f: any) => (
                        <View style={styles.friendsView} key={f.id}>
                            <View style={{width: 80, alignItems: "center"}}>
                                <Image style={styles.friendsBubble} src={f.avatar} />
                                <Text numberOfLines={1}>{f.name}</Text>
                            </View>
                            <Input maxLength={10} keyboardType="decimal-pad" numberOfLines={1}  placeholder='0.00' style={styles.amtInput} />
                            
                        </View>
                    ))
                }
                </YStack>
            </ScrollView>
            
            </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    amtInput: {
        backgroundColor: "transparent",
        width: "50%",
        height: "60%"
    },
    friendsView: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: "space-between"
    },
    friendsBubble: {
        width: 70, 
        height: 70,
        borderRadius: 50,
    },
  container: {
    flex: 1,
    margin: 24,
    marginTop: 50
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
}
});

export default SplitAmtModal;