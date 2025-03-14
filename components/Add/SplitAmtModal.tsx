import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { SizableText, YStack, XStack, Sheet, Button, Checkbox, Input } from 'tamagui';
import { ChevronDown, ChevronUp, X } from 'lucide-react-native';

const SplitAmtModal = () => {

  return (
    <Sheet
      modal={true}
      open={true}
      dismissOnSnapToBottom
    >
      <Sheet.Overlay />
      <Sheet.Frame padding="$4">
        <Sheet.Handle />
        
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <XStack justifyContent="space-between" alignItems="center" marginBottom="$4">
            <SizableText size="$6" fontWeight="bold">Split by Amount</SizableText>
            <TouchableOpacity>
              <X size={24} />
            </TouchableOpacity>
          </XStack>
          
          <ScrollView showsVerticalScrollIndicator={false}>
            <YStack gap="$4">
              
            </YStack>
          </ScrollView>
        </KeyboardAvoidingView>
      </Sheet.Frame>
    </Sheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#f9f9f9',
  },
  userAmount: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  }
});

export default SplitAmtModal;