// components/App.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './components/Button';
import PrenomsListe from './components/List';

const App = () => {
    const prenomsListe = [
        { prenom: 'Devin' },
        { prenom: 'Dan' },
        { prenom: 'Dominic' },
        { prenom: 'Jackson' },
        { prenom: 'James' },
        { prenom: 'Joel' },
        { prenom: 'John' },
        { prenom: 'Jillian' },
        { prenom: 'Jimmy' },
        { prenom: 'Julie' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Bienvenue dans React Native Paper!</Text>
            <Button
                label="Appuyez sur moi"
                onPress={() => console.log('Bouton cliqué')}
            />
            <PrenomsListe data={prenomsListe} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default App;
