import React from 'react';
import { FlatList, Text, View } from 'react-native';

const ListePrenoms = () => {
    const listePrenoms = [
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

    const renderItem = ({ item }) => (
        <View style={{ padding: 10 }}>
            <Text>{item.prenom}</Text>
        </View>
    );

    return (
        <FlatList
            data={listePrenoms}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

export default ListePrenoms;
