import React, { useRef } from 'react';
import { Text, Button, Input } from '@ui-kitten/components';
import { Container } from '../components';
import { Colors } from '../utils/colors';
import { Constants } from '../utils';
import { useForm } from '../hooks';
import { Icon } from 'react-native-elements';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const { textLabel } = styles;

  const { email, password, secureTextEntry, onChange } = useForm({
    email: '',
    password: '',
    secureTextEntry: true,
  });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSecureEntry = () => {
    onChange(!secureTextEntry, 'secureTextEntry');
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon
        solid
        size={20}
        {...props}
        color={Colors.gray2}
        type="font-awesome-5"
        name={secureTextEntry ? 'eye-slash' : 'eye'}
      />
    </TouchableWithoutFeedback>
  );

  const FbIcon = () => (
    <Icon
      name="facebook"
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
      <View style={{ flex: 1, paddingBottom: 50 }}>
        <Text style={{ color: Colors.dark }} category="h2">
          Iniciar sesión
        </Text>
        <Text style={{ color: Colors.gray2 }} category="s1">
          ¡Hola nuevamente!
        </Text>

        <Input
          label="Correo electrónico"
          autoCapitalize="none"
          ref={emailRef}
          value={email}
          keyboardType="email-address"
          returnKeyType="next"
          autoCompleteType="email"
          style={{ marginTop: 50 }}
          onChangeText={value => onChange(value, 'email')}
          onSubmitEditing={() => {
            Constants.focusTextInput(passwordRef);
          }}
        />
        <Input
          label="Contraseña"
          value={password}
          ref={passwordRef}
          returnKeyType="done"
          style={{ marginTop: 20 }}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={value => onChange(value, 'password')}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
        />

        <Text style={textLabel} category="s1">
          ¿Deseas iniciar sesión con Facebook?
        </Text>

        <Button
          status="info"
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate('')}
          accessoryLeft={FbIcon}>
          Facebook
        </Button>

        <Button
          style={Constants.StylesGlobal.btnContinuar}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'Dashboard' }],
            })
          }>
          Iniciar sesión
        </Button>

        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <Text style={textLabel} category="s2">
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  textLabel: {
    textAlign: 'center',
    marginTop: 50,
    color: Colors.gray2,
  },
});

export default LoginScreen;
