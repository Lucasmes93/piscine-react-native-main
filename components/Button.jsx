
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, color, backgroundColor, borderRadius }) => {
    const buttonStyle = {
        color: color || 'white',
        backgroundColor: backgroundColor || 'blue',
        borderRadius: borderRadius || '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        border: 'none',
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.string,
};

export default Button;
