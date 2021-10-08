import React, { useState } from 'react';
import { Keyboard, View, TouchableOpacity, Alert } from 'react-native';
import { useForm } from '../hooks';
import { Text, Button, Input, useTheme } from '@ui-kitten/components';
import { Colors } from '../utils/colors';
import { Loading, Container } from '../components';
import { StylesGlobal } from '../utils/constants';
import { Icon } from 'react-native-elements';
import { UserService } from '../services';

const CreateUserScreen = ({ navigation, route }) => {
  const { colRowLeft, colRowRight } = StylesGlobal;
  const theme = useTheme();

  const [user, setUser] = useState('');
  const { userError, loading, onChange } = useForm({
    loading: false,
    userError: undefined,
  });

  const { data } = route.params;

  const users = [
    `${data.name}${data.lastName}${
      Math.floor(Math.random() * (1000 - 100)) + 100
    }`,
    `${data.name}.${data.lastName.substr(0, 3)}${
      Math.floor(Math.random() * (100 - 10)) + 10
    }`,
    `${data.name}-${data.lastName}${
      Math.floor(Math.random() * (100 - 10)) + 10
    }`,
    `${data.name.toLowerCase()}${data.lastName.toLowerCase()}${
      Math.floor(Math.random() * (100000000 - 10000000)) + 10000000
    }`,
  ];

  const handleCreateUser = async withNickname => {
    onChange(undefined, 'userError');

    if (withNickname) {
      if (user.trim().length >= 8) {
        onChange(true, 'loading');
        let response = await UserService.ValidateUser(user);

        if (response.status === 200) {
          response = await UserService.Create({ ...data, nickname: user });
          onChange(false, 'loading');

          if (response.status === 200) {
            navigation.navigate('Registered', response.data);
          } else {
            Alert.alert('Error', response.message, [{ text: 'OK' }]);
          }
        } else {
          onChange(false, 'loading');
          onChange(response.message, 'userError');
        }
      } else {
        onChange('Campo vacío o usuario demasiado corto.', 'userError');
      }
    } else {
      onChange(true, 'loading');
      const response = await UserService.Create({
        ...data,
        nickname: data.email,
      });
      onChange(false, 'loading');

      if (response.status === 200) {
        navigation.navigate('Registered', response.data);
      } else {
        Alert.alert('Error', response.message, [{ text: 'OK' }]);
      }
    }
  };

  const renderUsers = (username, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setUser(username);
          onChange(undefined, 'userError');
        }}
        key={index}
        style={{ height: 50 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={colRowRight}>
            <Text style={{ color: Colors.dark }} category="label">
              {username}
            </Text>
          </View>

          <View>
            <Icon
              name="check-circle"
              size={18}
              color={theme['color-success-default']}
              type="font-awesome-5"
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Container
      activeBar
      themeBar="dark"
      withScroll
      colorBar={Colors.white}
      backgroundColor={Colors.white}>
      <Loading loading={loading} />

      <View style={{ flex: 1 }}>
        <Text style={{ color: Colors.dark }} category="h2">
          Crear cuenta
        </Text>

        <Text style={{ color: Colors.gray2 }} category="s1">
          Crea un usuario para tu cuenta
        </Text>

        <Input
          value={user}
          onChangeText={value => setUser(value)}
          caption={userError}
          status={userError ? 'danger' : 'default'}
          maxLength={20}
          autoFocus
          style={{ marginTop: 50 }}
          returnKeyType="done"
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
        />
        {userError ? (
          <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
            {users.map((username, i) => {
              return renderUsers(username, i);
            })}
          </View>
        ) : null}

        <View style={{ marginTop: 50, flexDirection: 'row' }}>
          <View style={colRowRight}>
            <Button onPress={() => handleCreateUser(false)} status="danger">
              Más tarde
            </Button>
          </View>
          <View style={colRowLeft}>
            <Button onPress={() => handleCreateUser(true)}>Continuar</Button>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default CreateUserScreen;
