import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const App = () => {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Bienvenue dans React Native Paper!</Text>
        <Button mode="contained" onPress={() => console.log('Bouton cliqué')}>
          Appuyez sur moi
        </Button>
      </View>
  );
}

export default App;

