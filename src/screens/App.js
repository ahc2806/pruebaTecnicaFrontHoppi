import React from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import { Theme, Mapping, FeatherIcons, MaterialIcons } from '../utils';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={[EvaIconsPack, FeatherIcons, MaterialIcons]} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...Theme }}
        customMapping={Mapping}>
        <Layout
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text status="primary">Hoppi</Text>
        </Layout>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
};

export default App;
