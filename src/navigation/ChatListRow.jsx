import { View, Text, Image } from 'react-native';
import React from 'react';
import { windowWidth } from '../utils/Dimensions';

const ChatListRow = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 16,
        padding: 16,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Image
        style={{
          width: 50,
          objectFit: 'contain',
          height: 50,
          borderRadius: 50
        }}
        source={{
          uri: 'https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }}
      />
      <View
        style={{
          position: 'relative',
          flexDirection: 'column',
          justifyContent: 'start',
          flex: 1,

          height: '100%',
          alignItems: 'start'
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#000',
            fontWeight: 'bold'
          }}>
          Melisa
        </Text>
        <Text
          numberOfLines={1}
          style={{
            marginTop: 4,
            fontSize: 14,
            color: '#000',
            opacity: 0.6
          }}>
          Lorem ipsum dolor sit amet consectetasdfsdfswrwerwerur{' '}
        </Text>
        <Text
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            fontSize: 12,
            color: '#000',
            opacity: 0.6
          }}>
          1 gün önce
        </Text>
      </View>
    </View>
  );
};

export default ChatListRow;
