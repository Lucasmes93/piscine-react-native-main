import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);
    const [registerLoading, setRegisterLoading] = useState(false);

    const handleLogin = () => {
        setLoginLoading(true);

        // Simulez une requête asynchrone
        setTimeout(() => {
            // Logique de connexion ici
            console.log('Email:', email);
            console.log('Password:', password);

            setLoginLoading(false);
        }, 1000); // Réduisez le temps à 1 seconde
    };

    const handleRegister = () => {
        setRegisterLoading(true);

        // Simulez une requête asynchrone
        setTimeout(() => {
            // Logique de redirection vers la page d'inscription
            navigation.navigate('Register');

            setRegisterLoading(false);
        }, 1000); // Réduisez le temps à 1 seconde
    };

    return (
        <ImageBackground
            source={require('../../assets/background.jpg')}
            style={styles.container}
        >
            <View style={styles.content}>
                <Text style={styles.heading}>Connectez-vous</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#B1B1B1"
                    onChangeText={setEmail}
                    value={email}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    placeholderTextColor="#B1B1B1"
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        {loginLoading ? (
                            <ActivityIndicator size="small" color="#fff" />
                        ) : (
                            <Text style={styles.buttonText}>Connexion</Text>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        {registerLoading ? (
                            <ActivityIndicator size="small" color="#fff" />
                        ) : (
                            <Text style={styles.buttonText}>Inscription</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        color: '#000',
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
});

export default HomeScreen;
