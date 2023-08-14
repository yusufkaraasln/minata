import React from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { windowWidth } from '../utils/Dimensions';
import InputField from '../components/InputField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1
  };

  const gradientColors = ['#FFC3A0', '#FFD9C4', '#FFF3F1'];

  const navigation = useNavigation();

  const userCredentials = {
    username: 'test',
    password: 'test'
  };

  const [user, setUser] = React.useState({
    username: '',
    password: ''
  });

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (user.username === userCredentials.username && user.password === userCredentials.password) {
      dispatch(setLogin(true));
      AsyncStorage.setItem('isLoggedIn', 'true');
    } else {
      alert('Kullanıcı adı veya şifre yanlış.');
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View style={backgroundStyle}>
        <LinearGradient colors={gradientColors} style={styles.container}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 20
            }}>
            <Image style={{ width: 250, height: 250 }} source={require('../assets/Minata.png')} />
          </View>

          <View style={styles.formContainer}>
            <InputField
              onChangeText={(text) => setUser({ ...user, username: text })}
              label={'Kullanıcı Adı'}
              icon={
                <MaterialIcons
                  name="alternate-email"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              keyboardType="email-address"
            />

            <InputField
              label={'Şifre'}
              onChangeText={(text) => setUser({ ...user, password: text })}
              icon={
                <Ionicons
                  name="ios-lock-closed-outline"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              inputType="password"
              fieldButtonLabel={'Unuttun mu?'}
              fieldButtonFunction={() => {}}
            />
            <TouchableOpacity onPress={handleLogin} activeOpacity={0.8} style={{}}>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Giriş Yap</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 32
              }}>
              <Text
                style={{
                  color: '#888',
                  textAlign: 'center',
                  marginHorizontal: 6
                }}>
                Hesabın yok mu?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text
                  style={{
                    color: '#FF66C4',
                    textAlign: 'center',
                    fontWeight: 'bold'
                  }}>
                  Kayıt Ol
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    alignItems: 'center'
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#333'
  },
  input: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#eee'
  },
  buttonContainer: {
    justifyContent: 'space-center',
    alignItems: 'center',
    width: windowWidth
  },
  button: {
    width: windowWidth - windowWidth / 3,

    height: 48,
    borderRadius: 16,
    backgroundColor: '#FF66C4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default LoginScreen;
