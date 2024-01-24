import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onPress, color }) => {
    const buttonStyle = {
        color: color || 'white',
        backgroundColor: 'blue',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        border: 'none',
    };

    return (
        <button style={buttonStyle} onClick={onPress}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string,
};

export default Button;
