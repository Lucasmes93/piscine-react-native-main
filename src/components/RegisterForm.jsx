// src/screens/RegisterFormScreen.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RegisterFormScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Formulaire d'Inscription</Text>
            {/* Ajoutez vos éléments de formulaire ici */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
});

export default RegisterFormScreen;
