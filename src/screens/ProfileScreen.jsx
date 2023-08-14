import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function ProfileScreen() {
  const gradientColors = ['#FFC3A0', '#FFD9C4'];
  const dispatch = useDispatch();
  return (
    <View style={{}}>
      <View
        style={{
          height: windowHeight / 2.2
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 16,
            padding: 16,
            borderBottomColor: 'rgba(0,0,0,0.2)',
            borderBottomWidth: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Image
            style={{
              width: 100,
              objectFit: 'contain',
              height: 100,
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
              justifyContent: 'center',
              flex: 1,
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
              @benmelisa
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.removeItem('isLoggedIn');
              dispatch(setLogin(false));
            }}
            activeOpacity={0.8}>
            <View
              style={{
                borderRadius: 16,
                width: 100,
                backgroundColor: 'tomato'
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#fff',
                  textAlign: 'center',
                  padding: 16
                }}>
                Çıkış Yap
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            padding: 16,
            borderBottomColor: 'rgba(0,0,0,0.2)',
            borderBottomWidth: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row'
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: 'bold'
            }}>
            Üyelik Tarihi
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
              backgroundColor: '#242526',
              padding: 8,
              borderRadius: 8,
              alignItems: 'center'
            }}>
            <FontAwesome5 name={'calendar'} size={16} color={'#fff'} />
            <Text
              style={{
                fontSize: 16,
                color: '#fff'
              }}>
              11.11.2023
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 16,
            borderBottomColor: 'rgba(0,0,0,0.2)',
            borderBottomWidth: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row'
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: 'bold'
            }}>
            Beğeniler
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
              backgroundColor: '#242526',
              padding: 8,
              borderRadius: 8,
              alignItems: 'center'
            }}>
            <FontAwesome5 name={'heart'} size={16} color={'pink'} />
            <Text
              style={{
                fontSize: 16,
                color: 'pink'
              }}>
              16
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 16,
            borderBottomColor: 'rgba(0,0,0,0.2)',
            borderBottomWidth: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row'
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: 'bold'
            }}>
            Mevcut Altın
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
              backgroundColor: '#242526',
              padding: 8,
              borderRadius: 8,
              alignItems: 'center'
            }}>
            <FontAwesome5 name={'coins'} size={16} color={'gold'} />
            <Text
              style={{
                fontSize: 16,
                color: 'gold'
              }}>
              27
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 16,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
          }}></View>
      </View>
      <View
        style={{
          height: windowHeight / 2.1,
          padding: 16
        }}>
        <LinearGradient
          style={{
            borderRadius: 16,
            width: 'auto',
            height: '100%'
          }}
          colors={gradientColors}>
          <Text
            style={{
              fontSize: 24,
              color: '#000',
              textAlign: 'center',
              padding: 16
            }}>
            Altın Yükle
          </Text>
          <View
            style={{
              flexDirection: 'column',
              gap: 16,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 16
            }}>
            <View
              style={{
                padding: 16,
                backgroundColor: '#fff',
                borderRadius: 16,
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'row'
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#000',
                  fontWeight: 'bold'
                }}>
                100 Altın
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 16,
                  backgroundColor: '#242526',
                  padding: 8,
                  borderRadius: 8,
                  alignItems: 'center'
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'gold'
                  }}>
                  100 ₺
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 16,
                backgroundColor: '#fff',
                borderRadius: 16,
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'row'
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#000',
                  fontWeight: 'bold'
                }}>
                100 Altın
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 16,
                  backgroundColor: '#242526',
                  padding: 8,
                  borderRadius: 8,
                  alignItems: 'center'
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'gold'
                  }}>
                  100 ₺
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 16,
                backgroundColor: '#fff',
                borderRadius: 16,
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'row'
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#000',
                  fontWeight: 'bold'
                }}>
                100 Altın
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 16,
                  backgroundColor: '#242526',
                  padding: 8,
                  borderRadius: 8,
                  alignItems: 'center'
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'gold'
                  }}>
                  100 ₺
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
