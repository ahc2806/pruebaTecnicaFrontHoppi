import { StyleSheet } from 'react-native';
import { useTheme } from '@ui-kitten/components';

export const Routes = {};

const theme = useTheme();
export const StylesGlobal = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  componentHeaderColor: {
    backgroundColor: theme['color-primary-default'],
    shadowColor: 'transparent',
  },
  colRowLeft: {
    marginLeft: 10,
    flex: 1,
  },
  colRowRight: {
    marginRight: 10,
    flex: 1,
  },
  btnContinuar: {
    marginTop: 50,
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
  },
});

// Focus para campos de formularios
export const focusTextInput = textInputRef => {
  textInputRef?.current?.focus?.();
};

// Expresiones regulares
export const validateEmail = email => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email);
};

// Arrays
export const genders = ['Seleccione', 'Hombre', 'Mujer', 'Indistinto'];
export const suburbs = [
  'Seleccione',
  '30 de Abril',
  'Arboledas',
  'Concordia',
  'Cuautémoc Cárdenas',
  'Cuitláhuac Centro',
  'El Jovito',
  'El Polvorón',
  'Oaxaca',
  'San Francisco',
  'San Pedro',
  'Tepeyac',
];
