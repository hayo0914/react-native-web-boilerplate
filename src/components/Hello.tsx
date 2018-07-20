import * as React from 'react';
import { Text, View, Dimensions } from 'react-native-web';

export default () => (
  <View
    style={{
      height: Dimensions.get('window').height,
      justifyContent: 'center',
    }}
  >
    <Text style={{ textAlign: 'center' }}>Hello World !</Text>
  </View>
);
