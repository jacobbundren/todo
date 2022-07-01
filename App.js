import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/home";
import React, { Component } from 'react';

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Home/>
                <StatusBar style="auto"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDD',
    alignItems: 'center',
  },
});
export default App;