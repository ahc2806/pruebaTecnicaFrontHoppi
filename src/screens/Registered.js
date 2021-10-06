import React from 'react';
// import LottieView from 'lottie-react-native';
import { Container } from '../components';
import { Colors } from '../utils/colors';
import { Constants } from '../utils';
// import { CheckRegister } from '../../../assets/animations';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

const RegisteredScreen = ({ navigation }) => {
  const { header } = Constants.StylesGlobal;

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
          ¡Listo! Ya puedes comenzar a realizar pedidos.
        </Text>

        {/* <LottieView
          style={{ height: '100%', width: '100%' }}
          source={CheckRegister}
          autoPlay={true}
          loop={true}
          speed={1}
        /> */}
      </View>

      <View style={{ flex: 1 }}>
        <Button
          style={{ marginTop: 50 }}
          accessoryLeft={SignInIcon}
          status="basic"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'Dashboard' }],
            })
          }>
          Iniciar sesión
        </Button>
      </View>
    </Container>
  );
};

export default RegisteredScreen;
