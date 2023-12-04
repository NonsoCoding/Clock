import { View } from 'react-native';
import { Dictionary } from './projects/Project101';
import { Practice } from './screens/Position';
// import { TodoApp } from './screens/Todo';
// import { Practice } from './screens/Position';

export default function App() {

  return ( 
    <View style={{ flex: 1}}>
      <Practice />
    </View>
  );
}