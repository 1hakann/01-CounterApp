import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from './constans/Colors';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';


const fetchFonts = () => {
  return Font.loadAsync({
    'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
    'ubuntu-medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
    'ubuntu-regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={(err) => console.log(err)} />
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <View style={styles.containerText}>
          <Text style={styles.appTitle}>Counter App</Text>
          <Text style={styles.count}>0</Text>
        </View>
        <View style={styles.containerFooter} className="containerFooter">
          <Button onPress={handlerDecrease} className="btnSubtract" buttonStyle={{backgroundColor: Colors.red, padding: 16, marginVertical: 4, marginHorizontal: 16}} titleStyle={{ fontFamily:'ubuntu-bold', fontSize:24, paddingVertical: 0, paddingHorizontal: 10 }}  color={Colors.red} title='Subtract' icon={<Icon name='arrow-down' size={15} color={Colors.white} />} />
          <Button className="btnReset" buttonStyle={{backgroundColor: Colors.white, padding: 16, marginVertical: 4, marginHorizontal: 16}} titleStyle={{ color:Colors.black, fontFamily:'ubuntu-bold', fontSize:24, paddingVertical: 0, paddingHorizontal: 10 }} title='Reset' icon={<Icon name='spinner' size={15} color={Colors.black} />} />
          <Button className="btnAdd" buttonStyle={{backgroundColor: Colors.green, padding: 16, marginVertical: 4, marginHorizontal: 16}} titleStyle={{ fontFamily:'ubuntu-bold', fontSize:24, paddingVertical: 0, paddingHorizontal: 10 }}  title='Add' icon={<Icon name='arrow-up' size={15} color={Colors.white} />} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 900,
    marginVertical: 0,
    marginHorizontal: 'auto',
    paddingVertical: 0,
    paddingHorizontal: 20,
    height: '100vh',
  },
  appTitle: {
    fontFamily: 'ubuntu-medium',
    fontSize: 32,
    fontWeight: 700,
    padding: 16,
    marginVertical: 0,
    marginHorizontal: 16,
  },
  containerBody: {
    width: 640,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 5,
    backgroundColor: Colors.pink,
    textAlign: 'center',
  },
  count: {
    fontFamily: 'ubuntu-regular',
    fontSize: 32,
    padding: 16,
    marginVertical: 0,
    marginHorizontal: 16,
    fontWeight: 700,
  },
  containerText: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
  },
  containerFooter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 16,
    marginVertical: 0,
    marginHorizontal: 16,
    borderRadius: 3,
  },
});
