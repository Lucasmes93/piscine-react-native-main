// App.jsx
import React from 'react';
import { View, Text } from 'react-native';
import Button from './components/Button';

const App = () => {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Bienvenue dans React Native Paper!</Text>
        <Button label="Appuyez sur moi" onPress={() => console.log('Bouton cliqué')} color="black" />
      </View>
  );
}

export default App;
