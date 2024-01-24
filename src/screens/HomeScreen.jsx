import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);
    const [registerLoading, setRegisterLoading] = useState(false);

    const handleLogin = () => {
        // Mettez l'état de chargement à true
        setLoginLoading(true);

        // Simulez une requête asynchrone, par exemple, une requête réseau
        setTimeout(() => {
            // Logique de connexion ici
            console.log('Email:', email);
            console.log('Password:', password);

            // Remettez l'état de chargement à false
            setLoginLoading(false);
        }, 1000); // Utilisez le temps nécessaire pour simuler la requête asynchrone
    };

    const handleRegister = () => {
        // Mettez l'état de chargement à true
        setRegisterLoading(true);

        // Simulez une requête asynchrone, par exemple, une requête réseau
        setTimeout(() => {
            // Logique d'inscription ici
            console.log('Inscription');

            // Remettez l'état de chargement à false
            setRegisterLoading(false);

            // Redirection vers la page d'inscription (RegisterFormScreen)
            navigation.navigate('Register');
        }, 2000); // Utilisez le temps nécessaire pour simuler la requête asynchrone
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

export default HomeScreen;
