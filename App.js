import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style = {styles.item1}>
        <Text style = {styles.textcommon}>Hello React Native</Text>
      </View>
      <View style = {styles.item2}>
        <Text style = {styles.textcommon}>Hello React Native</Text>
      </View>
      <View style = {styles.item3}>
        <Text style = {styles.textcommon}>Hello React Native</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item1:{
    marginTop: 20,
    width:100,
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'green'

  },
  item2:{
    marginTop: 20,
    width:100,
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'pink'

  },
  item3:{
    marginTop: 20,
    width:100,
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'yellow'

  },
  textcommon:{
    fontSize: 20
  }
});
