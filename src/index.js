import React from 'react';
import { AppRegistry, Text, View, Dimensions } from 'react-native-web';

const App = () => (
  <View
    style={{
      height: Dimensions.get('window').height,
      justifyContent: 'center',
    }}
  >
    <Text style={{ textAlign: 'center' }}>Hello World !</Text>
  </View>
);

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });
