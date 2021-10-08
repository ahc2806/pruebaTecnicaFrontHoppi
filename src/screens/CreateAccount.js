import React from 'react';
import { Container } from '../components';
import { Colors } from '../utils/colors';
import { Constants } from '../utils';
import { Icon } from 'react-native-elements';
import { View, Image } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import { useTheme } from '@ui-kitten/components';
import { LogoBlanco } from '../assets/img';

const CreateAccountScreen = ({ navigation }) => {
  const { header } = Constants.StylesGlobal;
  const theme = useTheme();

  const EmailIcon = () => (
    <Icon
      name="envelope"
      type="font-awesome-5"
      color={Colors.white}
      size={23}
      solid
    />
  );

  return (
    <Container
      activeBar
      colorBar={Colors.primary}
      backgroundColor={theme['color-primary-default']}>
      <View style={{ ...header, flex: 2, paddingBottom: 50 }}>
        <Text style={{ color: Colors.white }} category="h1">
          Crear cuenta
        </Text>
        <Text style={{ color: Colors.lighter }} category="s1">
          Crea una cuenta en tan sólo 3 pasos
        </Text>

        <Image
          style={{ width: '40%', height: '40%', marginTop: 80 }}
          source={LogoBlanco}
          resizeMode="contain"
        />
      </View>

      <View style={{ flex: 0.9 }}>
        <Button
          style={{ marginTop: 20 }}
          status="warning"
          accessoryLeft={EmailIcon}
          onPress={() => navigation.navigate('UserInformation')}>
          Usando correo
        </Button>
      </View>
    </Container>
  );
};

export default CreateAccountScreen;
