import { View, Text, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import React from 'react';
import ChatListRow from '../navigation/ChatListRow';
import { useNavigation } from '@react-navigation/native';

export default function ChatListScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}>
      <ScrollView style={{}}>
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('Chat')}
              activeOpacity={0.7}>
              <ChatListRow />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
}
