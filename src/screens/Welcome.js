import React from 'react';
import { View, Image } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import { Container } from '../components';
import { Colors } from '../utils/colors';
import { Constants } from '../utils';
import { useTheme } from '@ui-kitten/components';
import { LogoBlanco } from '../assets/img';

const WelcomeScreen = ({ navigation }) => {
  const { header } = Constants.StylesGlobal;
  const theme = useTheme();

  return (
    <Container
      activeBar
      colorBar={theme['color-primary-default']}
      backgroundColor={theme['color-primary-default']}>
      <View style={{ ...header, flex: 2, paddingBottom: 50 }}>
        <Text style={{ color: Colors.white }} category="h1">
          Bienvenido
        </Text>
        <Text style={{ color: Colors.lighter }} category="s1">
          Algún mensaje...
        </Text>
        <Image
          style={{ width: '40%', height: '40%', marginTop: 70 }}
          source={LogoBlanco}
          resizeMode="contain"
        />
      </View>

      <View style={{ flex: 0.8 }}>
        <Button status="info" onPress={() => navigation.navigate('Login')}>
          Ingresar a mi cuenta
        </Button>
        <Button
          status="warning"
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('CreateAccount')}>
          Crear una cuenta
        </Button>
      </View>
    </Container>
  );
};

export default WelcomeScreen;
