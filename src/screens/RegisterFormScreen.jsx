import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
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
        // Mettez l'état de chargement à true
        setLoading(true);

        // Simulez une requête asynchrone, par exemple, une requête réseau
        setTimeout(() => {
            // Logique d'inscription ici
            console.log('Nom:', firstName);
            console.log('Prénom:', lastName);
            console.log('Email:', email);
            console.log('Mot de passe:', password);
            console.log('Confirmation du mot de passe:', confirmPassword);

            // Redirection vers l'écran d'accueil (HomeScreen)
            navigation.navigate('Home');

            // Remettez l'état de chargement à false
            setLoading(false);
        }, 1000); // Utilisez le temps nécessaire pour simuler la requête asynchrone
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
                    onChangeText={setFirstName}
                    value={firstName}
                />
                {/* Les autres champs TextInput ici */}
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
        color: '#FFF',
        textAlign: 'center',
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
