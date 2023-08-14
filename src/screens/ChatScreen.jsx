import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import tr from 'dayjs/locale/tr';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { windowWidth } from '../utils/Dimensions';
import { useNavigation } from '@react-navigation/native';

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native'
      }
    }
  ]);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  const user = { _id: 1 };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#007AFF'
          }
        }}
        textStyle={{
          right: {
            color: '#fff'
          }
        }}
      />
    );
  };

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          gap: 16,
          padding: 16,
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          justifyContent: 'start',
          alignItems: 'start'
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 16,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: windowWidth - 90,
            alignItems: 'center'
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
              justifyContent: 'start',
              alignItems: 'center'
            }}>
            <Image
              style={{
                width: 48,
                objectFit: 'contain',
                height: 48,
                borderRadius: 50
              }}
              source={{
                uri: 'https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=1600'
              }}
            />

            <Text
              style={{
                fontSize: 16,
                color: '#000',
                fontWeight: 'bold'
              }}>
              Melisa
            </Text>
          </View>
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 50,
              backgroundColor: 'lime'
            }}></View>
        </View>
      </View>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={user}
        renderBubble={renderBubble}
        alwaysShowSend
        placeholder="Mesajınızı yazın..."
        locale={tr}
        scrollToBottom
        scrollToBottomComponent={() => <View />}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
