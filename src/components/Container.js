import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Keyboard,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../utils/colors';

const ContainerComponent = ({
  colorBar,
  themeBar,
  children,
  activeBar,
  withScroll,
  backgroundColor,
  styleContainer,
}) => {
  return (
    <SafeAreaView
      style={{
        ...style.container,
        backgroundColor: backgroundColor,
        paddingHorizontal: !withScroll ? 20 : 0,
      }}>
      {activeBar ? (
        <StatusBar
          backgroundColor={colorBar}
          barStyle={`${themeBar || 'light'}-content`}
          hidden={false}
          animated={true}
        />
      ) : null}

      {withScroll ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: !withScroll ? 0 : 20,
                  ...styleContainer,
                }}>
                {children}
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      ) : (
        <View style={{ flex: 1, ...styleContainer }}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
    paddingTop: 10,
  },
});

export default ContainerComponent;
