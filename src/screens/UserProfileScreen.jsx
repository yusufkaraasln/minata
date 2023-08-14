import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

export default function UserProfileScreen({ route }) {
  const { profile } = route.params;
  const gradientColors = ['#FFC3A0', '#FFD9C4', '#FFF3F1'];
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: 'relative',
        flex: 1
      }}>
      <View style={{ height: windowHeight / 2, backgroundColor: 'rgba(0,0,0,0.8)' }}>
        <Carousel
          data={profile.photos} // Profil resimleri
          renderItem={({ item }) => (
            <Image
              style={{
                width: windowWidth,
                height: windowHeight / 2
              }}
              source={{ uri: item }}
              resizeMode="cover"
            />
          )}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          layout="default"
        />
      </View>
      <LinearGradient
        colors={gradientColors}
        style={{
          paddingTop: 16,
          height: windowHeight / 2,
          position: 'absolute',
          bottom: 0,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32
        }}>
        <View
          style={{
            height: windowHeight / 2 - 48
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 32
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'start',
                gap: 16,
                alignItems: 'center'
              }}>
              <View>
                <Image
                  style={{
                    width: 100,
                    objectFit: 'contain',
                    height: 100,
                    borderRadius: 50,
                    borderColor: 'white',
                    alignSelf: 'center'
                  }}
                  source={{
                    uri: profile.profileImg
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 22,
                    alignSelf: 'center',
                    color: '#000'
                  }}>
                  {profile.name}, {profile.age}
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'start',
                  gap: 8,
                  alignItems: 'center'
                }}>
                <AntDesign name="heart" size={24} color="#f66" />
                <Text
                  style={{
                    fontSize: 22,
                    alignSelf: 'center',
                    color: '#f66'
                  }}>
                  {profile.likes}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 16,
              flexDirection: 'row',
              height: windowHeight / 8
            }}>
            <View
              style={{
                width: windowWidth / 2
              }}>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    backgroundColor: '#fff',
                    borderRadius: 16,
                    margin: 5,
                    gap: 8,
                    alignItems: 'center'
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'start',

                      gap: 8,
                      alignItems: 'center'
                    }}>
                    <AntDesign name="hearto" size={50} color="#f66" />
                  </View>
                  <Text
                    style={{
                      color: '#000'
                    }}>
                    Beğen
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chat');
              }}
              activeOpacity={0.8}>
              <View
                style={{
                  width: windowWidth / 2
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    backgroundColor: '#fff',
                    borderRadius: 16,
                    margin: 5,
                    gap: 8,
                    alignItems: 'center'
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'start',
                      gap: 8,
                      alignItems: 'center'
                    }}>
                    <Feather name="message-square" size={50} color="gray" />
                  </View>
                  <Text
                    style={{
                      color: '#000'
                    }}>
                    Mesaj Gönder
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: windowHeight / 7,
              marginTop: 24,
              marginHorizontal: 32,
              paddingTop: 16,
              backgroundColor: '#fff',
              borderRadius: 16,
              flexDirection: 'column',
              gap: 16
            }}>
            <Text
              style={{
                fontSize: 16,
                alignSelf: 'center',
                color: '#000'
              }}>
              Sosyal Medya
            </Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  gap: 8,
                  alignItems: 'center'
                }}>
                {/* instagram */}
                <AntDesign name="instagram" size={30} color="black" />
                <AntDesign name="facebook-square" size={30} color="black" />
                <FontAwesome name="snapchat-square" size={30} color="black" />
                {/* snapchat */}
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    height: windowHeight,

    photos: {},
    profile: {}
  }
});
