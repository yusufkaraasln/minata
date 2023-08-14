import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated
} from 'react-native';

import React, { useEffect } from 'react';
import { windowWidth, windowHeight } from '../utils/Dimensions';
import ProfileCard from '../components/ProfileCard';
import Tab from '../components/Tab';
import LinearGradient from 'react-native-linear-gradient';
import { DummyProfiles as dummyData } from '../utils/DummyProfiles';
import { useNavigation } from '@react-navigation/native';

export default function ExploreScreen() {
  const [activeTab, setActiveTab] = React.useState('new');
  const menuTabAnimation = {
    new: new Animated.Value(activeTab === 'new' ? 1 : 0),
    turkish: new Animated.Value(activeTab === 'turkish' ? 1 : 0),
    foreign: new Animated.Value(activeTab === 'foreign' ? 1 : 0)
  };

  const scrollViewRef = React.useRef();

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    Animated.timing(menuTabAnimation.new, {
      toValue: tab === 'new' ? 1 : 0,
      duration: 200,
      useNativeDriver: true
    }).start();
    Animated.timing(menuTabAnimation.turkish, {
      toValue: tab === 'turkish' ? 1 : 0,
      duration: 200,
      useNativeDriver: true
    }).start();
    Animated.timing(menuTabAnimation.foreign, {
      toValue: tab === 'foreign' ? 1 : 0,
      duration: 200,
      useNativeDriver: true
    }).start();

    scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  const gradientColors = ['#FFC3A0', '#FFD9C4', '#FFF3F1'];
  const genRandomValue = () => {
    return Math.floor(Math.random() * dummyData.length);
  };

  const randomGeneratedArrayDummyData = () => {
    const randomArray = [];
    const allValues = new Set();

    while (randomArray.length < dummyData.length) {
      const value = genRandomValue();
      if (!allValues.has(value)) {
        allValues.add(value);
        randomArray.push(dummyData[value]);
      }
    }

    return randomArray;
  };

  const randomGeneratedDummyData = randomGeneratedArrayDummyData();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient colors={gradientColors} style={styles.container}>
        <View style={styles.menubar}>
          <View
            style={{
              marginTop: 16,
              marginBottom: 16,
              backgroundColor: '#AD40AF',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 16,
              borderRadius: 32,
              paddingVertical: 8,
              paddingHorizontal: 14
            }}>
            <Tab
              onPress={() => handleTabPress('new')}
              activeTab={activeTab}
              name={'new'}
              menuTabAnimation={menuTabAnimation}
            />

            <Tab
              onPress={() => handleTabPress('turkish')}
              activeTab={activeTab}
              name={'turkish'}
              menuTabAnimation={menuTabAnimation}
            />

            <Tab
              onPress={() => handleTabPress('foreign')}
              activeTab={activeTab}
              name={'foreign'}
              menuTabAnimation={menuTabAnimation}
            />
          </View>
        </View>
        <ScrollView ref={scrollViewRef}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignContent: 'center'
            }}>
            {randomGeneratedDummyData.map((profile, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('UserProfile', { profile })}
                activeOpacity={0.8}
                key={index}>
                <ProfileCard
                  name={profile.name}
                  age={profile.age}
                  image={profile.profileImg}
                  likes={profile.likes}
                  isOnline={profile.isOnline}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

// Path: src\screens\ChatListScreen.jsx

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  menubar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth,
    justifyContent: 'center'
  }
});
