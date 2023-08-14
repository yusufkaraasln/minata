import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import React from 'react';
import { windowWidth } from '../utils/Dimensions';

export default function Tab({ onPress, activeTab, menuTabAnimation, name }) {
  const nameSwitch = (name) => {
    switch (name) {
      case 'new':
        return 'Yeni';
      case 'turkish':
        return 'Türkçe';
      case 'foreign':
        return 'Yabancı';
      default:
        return;
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Animated.View
        style={[
          styles.menuTab[activeTab === 'turkish' ? 'active' : 'inactive'],
          {
            backgroundColor: menuTabAnimation[name].interpolate({
              inputRange: [0, 1],
              outputRange: ['#AD40AF', 'yellow']
            }),
            transform: [
              {
                scale: menuTabAnimation[name].interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.2]
                })
              }
            ]
          }
        ]}>
        <Animated.Text
          style={[
            styles.menuTab[activeTab === 'turkish' ? 'active' : 'inactive'].text,
            {
              color: menuTabAnimation[name].interpolate({
                inputRange: [0, 1],
                outputRange: ['#fff', '#242526']
              })
            }
          ]}>
          {nameSwitch(name)}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuTab: {
    active: {
      paddingHorizontal: 32,
      paddingVertical: 8,
      borderRadius: 32,
      backgroundColor: 'yellow',
      text: {
        color: '#242526'
      }
    },
    inactive: {
      backgroundColor: '#AD40AF',
      paddingHorizontal: 32,
      paddingVertical: 8,
      borderRadius: 32,
      text: {
        color: '#fff'
      }
    }
  }
});
