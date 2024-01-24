// components/PrenomsListe.jsx
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const PrenomsListe = ({ data }) => {
    const renderItem = ({ item }) => (
        <View style={{ padding: 10 }}>
            <Text>{item.prenom}</Text>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.prenom}
        />
    );
};

export default PrenomsListe;
