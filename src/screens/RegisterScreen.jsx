import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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

function RegisterScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1
  };

  const gradientColors = ['#FFC3A0', '#FFD9C4', '#FFF3F1'];

  const navigation = useNavigation();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <KeyboardAvoidingView
        style={backgroundStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Gerekirse değeri ayarlayabilirsiniz
      >
        <ScrollView>
          <LinearGradient colors={gradientColors}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 20
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 20
                }}>
                <Image
                  style={{ width: 250, height: 250 }}
                  source={require('../assets/Minata.png')}
                />
              </View>

              <View style={styles.formContainer}>
                <InputField
                  label={'Kullanıcı Adı'}
                  icon={
                    <MaterialIcons
                      name="person"
                      size={20}
                      color="#666"
                      style={{ marginRight: 5 }}
                    />
                  }
                />

                <InputField
                  label={'E-posta'}
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
                  icon={
                    <Ionicons
                      name="ios-lock-closed-outline"
                      size={20}
                      color="#666"
                      style={{ marginRight: 5 }}
                    />
                  }
                  inputType="password"
                />

                <InputField
                  label={'Şifre Tekrar'}
                  icon={
                    <Ionicons
                      name="ios-lock-closed-outline"
                      size={20}
                      color="#666"
                      style={{ marginRight: 5 }}
                    />
                  }
                  inputType="password"
                />

                <TouchableOpacity onPress={() => {}} activeOpacity={0.8} style={{}}>
                  <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Kayıt Ol</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 32,
                    marginBottom: 32
                  }}>
                  <Text
                    style={{
                      color: '#888',
                      textAlign: 'center',
                      marginHorizontal: 8
                    }}>
                    Zaten hesabın var mı?{' '}
                  </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text
                      style={{
                        color: '#FF66C4',
                        textAlign: 'center',
                        fontWeight: 'bold'
                      }}>
                      Giriş Yap
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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

export default RegisterScreen;
