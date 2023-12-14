/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style ={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your course goal'/>
        <Button title='Add Goal'/>
      </View>
      <View>
        <Text>List of goals</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding:50,
  },
  inputContainer:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  textInput:{
    borderWidth:1,
    borderColor:"#cccccc",
    width:"80%",
    marginRight:8
  }
});

export default App;
