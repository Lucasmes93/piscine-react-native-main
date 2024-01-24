
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ label, onPress, color, backgroundColor, borderRadius }) => {
    const [buttonStyle, setButtonStyle] = useState({
        color: color || 'white',
        backgroundColor: backgroundColor || '#3498db',
        borderRadius: borderRadius || 5,
        padding: 10,
        cursor: 'pointer',
        border: 'none',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease-in-out',
    });

    const handleHover = () => {
        setButtonStyle(prevStyle => ({
            ...prevStyle,
            backgroundColor: '#2980b9',
        }));
    };

    const handleLeave = () => {
        setButtonStyle(prevStyle => ({
            ...prevStyle,
            backgroundColor: backgroundColor || '#3498db',
        }));
    };

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            <Text>{label}</Text>
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
