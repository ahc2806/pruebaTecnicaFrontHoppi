import React, { useRef } from 'react';
import { Container } from '../components';
import { Colors } from '../utils/colors';
import { Constants } from '../utils';
import { useForm } from '../hooks';
import { View, StyleSheet } from 'react-native';
import {
  Text,
  Button,
  Input,
  Datepicker,
  Select,
  SelectItem,
  IndexPath,
} from '@ui-kitten/components';

const UserInformationScreen = ({ navigation }) => {
  const { colRowLeft, colRowRight } = Constants.StylesGlobal;

  const {
    name,
    surnameFather,
    surnameMother,
    birthday,
    genderIndex,
    onChange,
  } = useForm({
    name: '',
    surnameFather: '',
    surnameMother: '',
    birthday: '',
    genderIndex: new IndexPath(0),
  });

  const gender = Constants.genders[genderIndex.row];
  let fechaMax = new Date(); // Fecha mínima para registro
  fechaMax.setMonth(fechaMax.getMonth() - 144);

  const nameRef = useRef();
  const surnameFatherRef = useRef();
  const surnameMotherRef = useRef();
  const birthdayRef = useRef();
  const genderRef = useRef();

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
          returnKeyType="next"
          style={{ marginTop: 50 }}
          onChangeText={value => onChange(value, 'name')}
          onSubmitEditing={() => {
            Constants.focusTextInput(surnameFatherRef);
          }}
        />
        <Input
          label="Apellido paterno"
          value={surnameFather}
          ref={surnameFatherRef}
          returnKeyType="next"
          style={{ marginTop: 20 }}
          onChangeText={value => onChange(value, 'surnameFather')}
          onSubmitEditing={() => {
            Constants.focusTextInput(surnameMotherRef);
          }}
        />
        <Input
          label="Apellido materno"
          value={surnameMother}
          ref={surnameMotherRef}
          returnKeyType="next"
          style={{ marginTop: 20 }}
          onChangeText={value => onChange(value, 'surnameMother')}
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
              onSelect={value => onChange(value, 'genderIndex')}>
              {Constants.genders.map((item, i) => (
                <SelectItem title={item} key={i + item} disabled={i < 1} />
              ))}
            </Select>
          </View>
        </View>

        <Button
          style={Constants.StylesGlobal.btnContinuar}
          onPress={() => navigation.navigate('Address')}>
          Continuar
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default UserInformationScreen;
