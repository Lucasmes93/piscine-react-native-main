import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ label, onPress, color, backgroundColor, borderRadius }) => {
    const [isShown, setIsShown] = useState(false);

    const handleHover = () => {
        setIsShown(true);
    };

    const handleLeave = () => {
        setIsShown(false);
    };

    const buttonStyle = {
        color: color || 'white',
        backgroundColor: backgroundColor || '#3498db',
        borderRadius: borderRadius || 5,
        padding: 10,
        cursor: 'pointer',
        border: 'none',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease-in-out',
    };

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            <Text>{label}</Text>

            {isShown && (
                <View>
                    <Text>Cette partie s'affiche lorsque le bouton est survolé.</Text>
                    {/* Ajoute d'autres éléments que tu veux afficher ici */}
                </View>
            )}
        </TouchableOpacity>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.number,
};

export default Button;
