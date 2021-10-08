import React, { useRef, useState } from 'react';
import { Container } from '../components';
import { Colors } from '../utils/colors';
import { Constants } from '../utils';
import { useForm } from '../hooks';
import { View } from 'react-native';
import { Countries } from '../utils';
import {
  Text,
  Button,
  Input,
  Datepicker,
  Select,
  SelectItem,
  IndexPath,
} from '@ui-kitten/components';

const UserInformationScreen = ({ navigation, route }) => {
  const { colRowLeft, colRowRight, btnContinuar } = Constants.StylesGlobal;

  const {
    name,
    surnameFather,
    birthday,
    genderIndex,
    bio,
    countryIndex,
    onChange,
  } = useForm({
    name: '',
    surnameFather: '',
    birthday: '',
    bio: '',
    countryIndex: new IndexPath(0),
    genderIndex: new IndexPath(0),
  });

  const gender = Constants.genders[genderIndex.row];
  const country = Countries.map(item => item.name)[countryIndex.row];

  let fechaMax = new Date(); // Fecha mínima para registro
  fechaMax.setMonth(fechaMax.getMonth() - 144);

  const nameRef = useRef();
  const surnameFatherRef = useRef();
  const birthdayRef = useRef();
  const genderRef = useRef();
  const bioRef = useRef();
  const countryRef = useRef();

  const [nameError, setNameError] = useState(undefined);
  const [surnameError, setSurnameError] = useState(undefined);
  const [dateError, setDateError] = useState(undefined);
  const [genderError, setGenderError] = useState(undefined);
  const [countryError, setCountryError] = useState(undefined);

  const validateForm = () => {
    setNameError(undefined);
    setSurnameError(undefined);
    setDateError(undefined);
    setGenderError(undefined);
    setCountryError(undefined);

    if (
      name.trim().length < 1 ||
      surnameFather.trim().length < 1 ||
      birthday.length < 1 ||
      genderIndex.row < 1 ||
      countryIndex.row < 1
    ) {
      if (name.trim().length < 1) setNameError('* Está vacío');
      if (surnameFather.trim().length < 1) setSurnameError('* Está vacío');
      if (birthday.length < 1) setDateError('* Fecha no válida');
      if (genderIndex.row < 1) setGenderError('* Sin elegir');
      if (countryIndex.row < 1) setCountryError('* Sin elegir');
    } else {
      return true;
    }
    return false;
  };

  const handlePersonalInformation = () => {
    if (validateForm()) {
      navigation.navigate('CreateUser', {
        data: {
          ...route.params.data,
          name: name.trim(),
          lastName: surnameFather.trim(),
          bday: new Date(birthday),
          gender: genderIndex.row - 1,
          country,
          bio,
        },
      });
    }
  };

  return (
    <Container
      activeBar
      withScroll
      themeBar="dark"
      colorBar={Colors.white}
      backgroundColor={Colors.white}>
      <View style={{ flex: 1, paddingBottom: 50 }}>
        <Text style={{ color: Colors.dark }} category="h2">
          Crear cuenta
        </Text>
        <Text style={{ color: Colors.gray2 }} category="s1">
          Información personal
        </Text>

        <Input
          label="Nombre(s)"
          ref={nameRef}
          value={name}
          caption={nameError}
          status={nameError ? 'danger' : 'default'}
          returnKeyType="next"
          style={{ marginTop: 50 }}
          onChangeText={value => onChange(value, 'name')}
          onSubmitEditing={() => {
            Constants.focusTextInput(surnameFatherRef);
          }}
        />
        <Input
          label="Apellidos"
          value={surnameFather}
          ref={surnameFatherRef}
          returnKeyType="next"
          style={{ marginTop: 20 }}
          caption={surnameError}
          status={surnameError ? 'danger' : 'default'}
          onChangeText={value => onChange(value, 'surnameFather')}
          onSubmitEditing={() => {
            Constants.focusTextInput(bioRef);
          }}
        />
        <Input
          label="Sobre ti"
          value={bio}
          ref={bioRef}
          multiline
          returnKeyType="next"
          style={{ marginTop: 20 }}
          onChangeText={value => onChange(value, 'bio')}
          onSubmitEditing={() => {
            Constants.focusTextInput(birthdayRef);
          }}
        />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={colRowRight}>
            <Datepicker
              label="Fecha de nacimiento"
              date={birthday}
              max={fechaMax}
              ref={birthdayRef}
              autoDismiss={true}
              min={new Date('1950-08-10')}
              caption={dateError}
              status={dateError ? 'danger' : 'default'}
              onSelect={value => {
                onChange(value, 'birthday');
                Constants.focusTextInput(genderRef);
              }}
            />
          </View>
          <View style={colRowLeft}>
            <Select
              selectedIndex={genderIndex}
              value={gender}
              label="Género"
              ref={genderRef}
              caption={genderError}
              status={genderError ? 'danger' : 'default'}
              onSelect={value => onChange(value, 'genderIndex')}>
              {Constants.genders.map((item, i) => (
                <SelectItem title={item} key={i + item} disabled={i < 1} />
              ))}
            </Select>
          </View>
        </View>

        <Select
          selectedIndex={countryIndex}
          value={country}
          label="País"
          ref={countryRef}
          caption={countryError}
          style={{ marginTop: 20 }}
          status={countryError ? 'danger' : 'default'}
          onSelect={value => onChange(value, 'countryIndex')}>
          {Countries.map((item, i) => (
            <SelectItem title={item.name} key={i + item} disabled={i < 1} />
          ))}
        </Select>

        <Button style={btnContinuar} onPress={handlePersonalInformation}>
          Continuar
        </Button>
      </View>
    </Container>
  );
};

export default UserInformationScreen;
