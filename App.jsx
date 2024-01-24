// components/App.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './src/components/Button'; // Utilisation du chemin modifié
import PrenomsListe from './src/components/List'; // Utilisation du chemin modifié
import HomeScreen from './src/screens/HomeScreen'; // Utilisation du chemin modifié

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
            <HomeScreen />
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
});

export default App;
