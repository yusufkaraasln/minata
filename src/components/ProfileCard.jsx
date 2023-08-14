import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ProfileCard({ name, age, image, onPress, isOnline, likes }) {
  return (
    <View onPress={onPress} style={styles.profileCard.body}>
      <Image
        style={{
          width: windowWidth / 2.2,
          height: windowHeight / 3,
          objectFit: 'contain',
          marginTop: 16,
          borderRadius: 16
        }}
        source={{
          uri: image
        }}
      />
      <View style={styles.profileCard.overlay}>
        <View style={styles.profileCard.infoContainer}>
          <Text style={styles.profileCard.name}>
            {name}, {age}
          </Text>
        </View>
      </View>
      <View style={styles.profileCard.statusContainer}>
        <View
          style={{
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: windowWidth / 2.8,
            marginRight: 8
          }}>
          <View style={styles.profileCard.status}>
            <AntDesign name="heart" size={20} color="#f66" />
            <Text style={styles.profileCard.status.text}>{likes}</Text>
          </View>
          {isOnline && <View style={styles.profileCard.statusIndicator} />}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileCard: {
    body: {
      marginHorizontal: 8,
      position: 'relative',
      marginVertical: 8,
      width: windowWidth / 2.2,
      height: windowHeight / 3,
      borderRadius: 16,
      position: 'relative',
      overflow: 'hidden'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
      position: 'absolute',
      bottom: 0,
      width: '100%',

      alignItems: 'center'
    },
    infoContainer: {
      marginBottom: 4,
      alignItems: 'center'
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF'
    },
    age: {
      fontSize: 16,
      color: '#FFFFFF'
    },
    statusContainer: {
      position: 'absolute',

      backgroundColor: 'rgb(255, 255, 255)',
      justifyContent: 'space-evenly',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center'
    },
    statusIndicator: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'green',
      marginRight: 8
    },
    status: {
      color: '#f66',
      flexDirection: 'row',
      paddingHorizontal: 8,
      borderRadius: 16,
      gap: 8,
      paddingVertical: 4,
      alignItems: 'center',
      text: {
        color: '#f66',
        fontSize: 12
      },
      justifyContent: 'space-between'
    }
  }
});
