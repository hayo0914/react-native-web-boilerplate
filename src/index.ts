import { AppRegistry } from 'react-native-web';
import Hello from './components/Hello';

AppRegistry.registerComponent('App', () => Hello);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });
