import React from 'react';
// import LottieView from 'lottie-react-native';
import { Container } from '../components';
import { Colors } from '../utils/colors';
import { Constants } from '../utils';
// import { ChickendPieces } from '../../../assets/animations';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import { useTheme } from '@ui-kitten/components';

const CreateAccountScreen = ({ navigation }) => {
  const { header } = Constants.StylesGlobal;
  const theme = useTheme();

  const FbIcon = () => (
    <Icon
      name="facebook"
      type="font-awesome-5"
      color={Colors.white}
      size={23}
      solid
    />
  );

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
      <View style={{ flex: 0.7 }} />

      <View style={{ ...header, flex: 2, paddingBottom: 50 }}>
        <Text style={{ color: Colors.white }} category="h1">
          Crear cuenta
        </Text>
        <Text style={{ color: Colors.lighter }} category="s1">
          Crea una cuenta en tan sólo 3 pasos
        </Text>

        {/* <LottieView
          style={{ height: '100%', width: '100%' }}
          source={ChickendPieces}
          autoPlay={true}
          loop={true}
          speed={1}
        /> */}
      </View>

      <View style={{ flex: 1 }}>
        <Button
          status="info"
          onPress={() => navigation.navigate('')}
          accessoryLeft={FbIcon}>
          Facebook
        </Button>
        <Button
          style={{ marginTop: 20 }}
          accessoryLeft={EmailIcon}
          status="basic"
          onPress={() => navigation.navigate('UserInformation')}>
          Usando correo
        </Button>
      </View>
    </Container>
  );
};

export default CreateAccountScreen;
