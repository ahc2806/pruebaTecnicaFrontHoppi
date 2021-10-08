import React from 'react';
import { Container } from '../components';
import { Colors } from '../utils/colors';
import { Constants } from '../utils';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisteredScreen = ({ navigation, route }) => {
  const { header } = Constants.StylesGlobal;

  const handleLogin = async () => {
    await AsyncStorage.setItem('token', route.params.token);
    await AsyncStorage.setItem('user', JSON.stringify(route.params.user));

    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });
  };

  const SignInIcon = () => (
    <Icon
      name="sign-in-alt"
      type="font-awesome-5"
      color={Colors.white}
      size={23}
      solid
    />
  );

  return (
    <Container
      activeBar
      themeBar="dark"
      colorBar={Colors.white}
      backgroundColor={Colors.white}>
      <View style={{ flex: 0.7 }} />

      <View style={{ ...header, flex: 2.5, paddingBottom: 50 }}>
        <Text style={{ color: Colors.dark }} category="h1">
          ¡Registrado!
        </Text>
        <Text
          style={{ color: Colors.gray2, textAlign: 'center' }}
          category="s1">
          ¡Listo! Ya puedes utilizar la aplicación.
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <Button
          style={{ marginTop: 50 }}
          accessoryLeft={SignInIcon}
          status="primary"
          onPress={handleLogin}>
          Iniciar sesión
        </Button>
      </View>
    </Container>
  );
};

export default RegisteredScreen;
