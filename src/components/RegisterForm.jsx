// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const RegisterForm = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCoffeePress = () => {
        // Action lorsque le bouton "Faire le café" est pressé
        console.log('Faire le café ! ☕');
    };

    return (
        <View style={styles.container}>
            <TextInput
                label="Nom"
                value={nom}
                onChangeText={(text) => setNom(text)}
                style={styles.input}
            />
            <TextInput
                label="Prénom"
                value={prenom}
                onChangeText={(text) => setPrenom(text)}
                style={styles.input}
            />
            <TextInput
                label="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                keyboardType="email-address"
            />
            <TextInput
                label="Mot de passe"
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
                secureTextEntry
            />
            <TextInput
                label="Confirmer le mot de passe"
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                style={styles.input}
                secureTextEntry
            />
            <Button mode="contained" onPress={handleCoffeePress} style={styles.button}>
                Faire le café
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '80%',
    },
    input: {
        marginVertical: 10,
    },
    button: {
        marginTop: 20,
    },
});

export default RegisterForm;
