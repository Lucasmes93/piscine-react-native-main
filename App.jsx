// src/components/App.jsx
import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import {Button} from './src/components/Button'
import HomeScreen from './src/screens/HomeScreen';
import RegisterForm from './src/components/RegisterForm';

const App = () => {
    return (
        <ImageBackground
            source={require('./assets/background.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <HomeScreen />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // Stretches or covers the background image to fill the entire container
        justifyContent: 'center',
    },
});

export default App;