// src/components/App.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './src/components/Button'; // Utilisation du chemin modifié
import HomeScreen from './src/screens/HomeScreen'; // Utilisation du chemin modifié
import RegisterForm from './src/components/RegisterForm'; // Utilisation du chemin modifié

const App = () => {
    return (
        <View style={styles.container}>
            <HomeScreen />
            <Button
                label="Appuyez sur moi"
                onPress={() => console.log('Bouton cliqué')}
            />
            <RegisterForm />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
