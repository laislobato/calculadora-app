import React, { useMemo, useState} from 'react';
import { StyleSheet, Text, View, Pressable, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import CalcButton from './components/CalcButton';
import Display from './components/Display';
import { themes } from './theme/token';
import { craftEngine } from './utils/calcEngine'


export default function App() {
  const [mode, setMode] = useState("dark");
  const theme = themes[mode];


  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ff0000ff', '#ffa600ff', '#ffee00ff', '#0c4b06ff', '#0b34e9ff', '#3f064bff']}
        style={styles.button}>
        <Text style={styles.text}>rafael é VIADOOOOOOOOOOOOOO</Text>
      </LinearGradient>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    fontSize: 60,
    textAlign: 'center',
    outlineColor: '#ffff',
    outlineOffset: 20,
    outlineWidth: 10,
  }
});
