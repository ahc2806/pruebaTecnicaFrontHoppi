import React, { useRef } from 'react';
import { Container } from '../components';
import { Colors } from '../utils/colors';
import { Constants } from '../utils';
import { useForm } from '../hooks';
import { Keyboard, View } from 'react-native';
import {
  Button,
  Text,
  Input,
  Select,
  SelectItem,
  IndexPath,
} from '@ui-kitten/components';

export const AddressScreen = ({ navigation }) => {
  const { colRowLeft, colRowRight } = Constants.StylesGlobal;

  const { suburbIndex, street, reference, numInt, numExt, locality, onChange } =
    useForm({
      suburbIndex: new IndexPath(0),
      street: '',
      reference: '',
      numInt: '',
      numExt: '',
      locality: '',
    });

  const suburb = Constants.suburbs[suburbIndex.row];

  const suburbRef = useRef();
  const referenceRef = useRef();
  const numIntRef = useRef();
  const numExtRef = useRef();
  const streetRef = useRef();
  const localityRef = useRef();

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
          Datos de dirección
        </Text>

        <Input
          label="Calle"
          value={street}
          ref={streetRef}
          returnKeyType="next"
          style={{ marginTop: 50 }}
          onChangeText={value => onChange(value, 'street')}
          onSubmitEditing={() => {
            Constants.focusTextInput(referenceRef);
          }}
        />
        <Input
          label="Referencia"
          value={reference}
          ref={referenceRef}
          returnKeyType="next"
          style={{ marginTop: 20 }}
          onChangeText={value => onChange(value, 'reference')}
          onSubmitEditing={() => {
            Constants.focusTextInput(suburbRef);
          }}
        />
        <Select
          label="Colonia"
          ref={suburbRef}
          value={suburb}
          selectedIndex={suburbIndex}
          style={{ marginTop: 20 }}
          onSelect={value => {
            onChange(value, 'suburb');
            Constants.focusTextInput(localityRef);
          }}>
          {Constants.suburbs.map((item, i) => (
            <SelectItem title={item} key={i + item} disabled={i < 1} />
          ))}
        </Select>
        <Input
          label="Localidad"
          value={locality}
          ref={localityRef}
          returnKeyType="next"
          style={{ marginTop: 20 }}
          onChangeText={value => onChange(value, 'locality')}
          onSubmitEditing={() => {
            Constants.focusTextInput(numExtRef);
          }}
        />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={colRowRight}>
            <Input
              label="Número exterior"
              value={numExt}
              ref={numExtRef}
              returnKeyType="next"
              keyboardType="numeric"
              onChangeText={value => onChange(value, 'numExt')}
              onSubmitEditing={() => {
                Constants.focusTextInput(numIntRef);
              }}
            />
          </View>
          <View style={colRowLeft}>
            <Input
              label="Número interior"
              value={numInt}
              ref={numIntRef}
              returnKeyType="done"
              keyboardType="numeric"
              onChangeText={value => onChange(value, 'numInt')}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
            />
          </View>
        </View>

        <Button
          style={Constants.StylesGlobal.btnContinuar}
          onPress={() => navigation.navigate('Registered')}>
          Continuar
        </Button>
      </View>
    </Container>
  );
};

export default AddressScreen;
