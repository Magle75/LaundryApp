import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import store from "./sore";
import StackNavigator from './StackNavigator';


export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <StackNavigator/>
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
