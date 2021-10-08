import React from 'react';
import { Modal, Text } from '@ui-kitten/components';
import Spinner from 'react-native-spinkit';
import { Colors } from '../utils/colors';
import { StatusBar } from 'react-native';

const Loading = ({ loading, activeText }) => {
  return (
    <Modal
      visible={loading}
      backdropStyle={{ backgroundColor: 'rgba(0,0,0, 0.7)' }}>
      <StatusBar
        backgroundColor={'rgba(0, 0, 0, 0.7)'}
        barStyle="dark-content"
        hidden={false}
      />
      <Spinner
        style={{
          marginTop: 5,
          marginBottom: 15,
          alignSelf: 'center',
        }}
        isVisible={loading}
        size={80}
        type="FadingCircleAlt"
        color={Colors.light}
      />
      {activeText ? (
        <Text
          category="s1"
          style={{
            marginTop: 30,
            color: Colors.light,
          }}>
          Cargando contenido, por favor espera...
        </Text>
      ) : null}
    </Modal>
  );
};

export default Loading;
