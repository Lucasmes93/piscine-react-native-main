import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterFormScreen = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
            return;
        }

        // Set loading state to true
        setLoading(true);

        // Simulate an asynchronous request, for example, a network request
        setTimeout(() => {
            // Registration logic here
            console.log('Nom:', firstName);
            console.log('Prénom:', lastName);
            console.log('Email:', email);
            console.log('Mot de passe:', password);
            console.log('Confirmation du mot de passe:', confirmPassword);

            // Reset loading state to false
            setLoading(false);

            // Redirect to the home page (HomeScreen)
            navigation.navigate('Home');
        }, 1000); // Reduce the time to 1 second
    };

    return (
        <ImageBackground
            source={require('../../assets/background.jpg')}
            style={styles.container}
        >
            <View style={styles.content}>
                <Text style={styles.heading}>Formulaire d'Inscription</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nom"
                    placeholderTextColor="#000"
                    onChangeText={setFirstName}
                    value={firstName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Prénom"
                    placeholderTextColor="#000"
                    onChangeText={setLastName}
                    value={lastName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#000"
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    placeholderTextColor="#000"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmer le mot de passe"
                    placeholderTextColor="#000"
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>S'inscrire</Text>
                    )}
                </TouchableOpacity>
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
    content: {
        width: '80%',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        color: 'white',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 48,
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 16,
        padding: 8,
        color: '#000',
    },
    button: {
        width: '100%',
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
});

export default RegisterFormScreen;
