import React, { useRef, useState } from 'react';
import { Text, Button, Input } from '@ui-kitten/components';
import { Container } from '../components';
import { Colors } from '../utils/colors';
import { Constants } from '../utils';
import { useForm } from '../hooks';
import { Icon } from 'react-native-elements';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

const UserInformationScreen = ({ navigation }) => {
  const { email, password, secureTextEntry, confirmed, phone, onChange } =
    useForm({
      email: '',
      password: '',
      confirmed: '',
      phone: '',
      secureTextEntry: true,
    });

  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const [passwordError2, setPasswordError2] = useState(undefined);
  const [phoneError, setPhoneError] = useState(undefined);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmedRef = useRef(null);
  const phoneRef = useRef(null);

  const toggleSecureEntry = () => {
    onChange(!secureTextEntry, 'secureTextEntry');
  };

  const validateForm = () => {
    setEmailError(undefined);
    setPasswordError(undefined);
    setPasswordError2(undefined);
    setPhoneError(undefined);

    if (
      email.trim().length < 1 ||
      password.trim().length < 1 ||
      confirmed.trim().length < 1 ||
      phone.trim().length < 1
    ) {
      if (email.trim().length < 1) setEmailError('* Está vacío');
      if (password.trim().length < 1) setPasswordError('* Está vacío');
      if (confirmed.trim().length < 1) setPasswordError2('* Está vacío');
      if (phone.trim().length < 1) setPhoneError('* Está vacío');

      return false;
    } else {
      let validarCorreo = false;
      let validarPassword = false;
      let validarPhone = false;

      if (!Constants.validateEmail(email)) {
        setEmailError('El correo ingresado no es válido.');
      } else {
        validarCorreo = true;
      }

      if (phone !== '' && phone.length !== 10) {
        setPhoneError('El número es incorrecto.');
      } else {
        validarPhone = true;
      }

      if (password !== confirmed) {
        setPasswordError2('Las contraseñas no coinciden');
      } else if (password.length < 8) {
        setPasswordError('La contraseña debe tener mínimo 8 caracteres.');
      } else {
        validarPassword = true;
      }

      if (validarCorreo && validarPassword && validarPhone) {
        return true;
      }
      return false;
    }
  };

  const handleUserInformation = () => {
    if (validateForm()) {
      navigation.navigate('PersonalInformation', {
        data: { email, uid: password, hangout: phone },
      });
    }
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon
        solid
        size={18}
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
      withScroll
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
          caption={emailError}
          status={emailError ? 'danger' : 'default'}
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
          caption={passwordError}
          returnKeyType="next"
          status={passwordError ? 'danger' : 'default'}
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
          caption={passwordError2}
          returnKeyType="next"
          status={passwordError2 ? 'danger' : 'default'}
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
          status={phoneError ? 'danger' : 'default'}
          caption={phoneError}
          returnKeyType="done"
          keyboardType="phone-pad"
          style={{ marginTop: 20 }}
          maxLength={10}
          onChangeText={value => onChange(value, 'phone')}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
        />

        <Button
          style={Constants.StylesGlobal.btnContinuar}
          onPress={handleUserInformation}>
          Continuar
        </Button>
      </View>
    </Container>
  );
};

export default UserInformationScreen;
