// src/screens/RegisterFormScreen.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';

const RegisterFormScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        // Logique d'inscription ici
        console.log('Nom:', firstName);
        console.log('Prénom:', lastName);
        console.log('Email:', email);
        console.log('Mot de passe:', password);
        console.log('Confirmation du mot de passe:', confirmPassword);
    };

    return (
        <ImageBackground
            source={require('../../assets/background.jpg')}
            style={styles.container}
        >
            <View style={styles.container}>
                <Text style={styles.heading}>Formulaire d'Inscription</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nom"
                    onChangeText={setFirstName}
                    value={firstName}
             />
                <TextInput
                    style={styles.input}
                    placeholder="Prénom"
                 onChangeText={setLastName}
                    value={lastName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmer le mot de passe"
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                 <Text style={styles.buttonText}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        marginBottom: 24,
    },
    subHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 16,
        color: '#FFF',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#FFF',
    },
    input: {
        width: '100%',
        height: 48,
        borderRadius: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 16,
        padding: 8,
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        width: '48%',
        height: 48,
        borderRadius: 8,
        backgroundColor: 'mediumpurple',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        alignItems: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorMessage: {
        color: 'red',
        fontSize: 16,
        marginBottom: 16,
    },
    travelTime: {
        marginTop: 10,
        textAlign: 'center',
    },
    map: {
        flex: 1,
    },
});
export default RegisterFormScreen;