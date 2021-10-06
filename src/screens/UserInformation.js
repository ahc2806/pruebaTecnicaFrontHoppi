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
  StyleSheet,
} from 'react-native';

const UserInformationScreen = ({ navigation }) => {
  const { email, password, secureTextEntry, confirmed, phone, onChange } =
    useForm({
      email: '',
      password: '',
      confirmed: '',
      phone: '',
      secureTextEntry: true,
    });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmedRef = useRef(null);
  const phoneRef = useRef(null);

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

  return (
    <Container
      activeBar
      themeBar="dark"
      colorBar={Colors.white}
      backgroundColor={Colors.white}>
      <View style={{ flex: 1, paddingBottom: 50 }}>
        <Text style={{ color: Colors.dark }} category="h2">
          Crear cuenta
        </Text>
        <Text style={{ color: Colors.gray2 }} category="s1">
          Datos de usuario
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
          returnKeyType="next"
          style={{ marginTop: 20 }}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={value => onChange(value, 'password')}
          onSubmitEditing={() => {
            Constants.focusTextInput(confirmedRef);
          }}
        />
        <Input
          label="Confirmar contraseña"
          value={confirmed}
          ref={confirmedRef}
          returnKeyType="next"
          style={{ marginTop: 20 }}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={value => onChange(value, 'confirmed')}
          onSubmitEditing={() => {
            Constants.focusTextInput(phoneRef);
          }}
        />
        <Input
          label="Teléfono"
          value={phone}
          ref={phoneRef}
          returnKeyType="done"
          keyboardType="phone-pad"
          style={{ marginTop: 20 }}
          onChangeText={value => onChange(value, 'phone')}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
        />

        <Button
          style={Constants.StylesGlobal.btnContinuar}
          onPress={() => navigation.navigate('PersonalInformation')}>
          Continuar
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default UserInformationScreen;
