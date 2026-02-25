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
    <View style={[styles.container, { backgroundColor : theme.bg }]}>
      <LinearGradient
        colors={['#ff0000ff', '#ffa600ff', '#ffee00ff', '#0c4b06ff', '#0b34e9ff', '#3f064bff']}
        style={styles.button}>
        <Text style={styles.text}>rafael é VIADOOOOOOOOOOOOOO</Text>
      </LinearGradient>
        <StatusBar barStyle={mode === "dark" ? "light-content" : "dark-content"} />

        <View style={styles.topBar}>
          <Pressable
          onPress={() => setMode((m) => (m === "dark" ? "light" : "dark"))}
          styles={({pressed}) => [
            styles.toggle,
            {
              backgroundColor: theme.card,
              opacity: pressed ? 0.75 : 1,
              borderColor: theme.stroke
            }
          ]}
          >

            <Text style={{color: theme.text, fontWeight: "700"}}>
              {mode === "dark" ? "Escuro": "Claro"}
            </Text>

          </Pressable>
        </View>

        <Display
        theme={theme} 
        expression={state.expression}
        value={state.display}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingTop: 40,
  },
  text : {
    fontSize: 60,
    textAlign: 'center',
    outlineColor: '#ffff',
    outlineOffset: 20,
    outlineWidth: 10,
  },
  topBar: {
    alignItems: "flex-end",
    marginBottom: 6,
  },
  toggle: {
  paddingHorizontal: 14,
  paddingVertical: 8,
  borderRadius: 14,
  borderWidth: 1,
  },
  pad: {
    gap: 14,
    paddingBottom: 18,
  },
  row: {
    flexDirection: 'row',
    gap: 14,
  },

});
