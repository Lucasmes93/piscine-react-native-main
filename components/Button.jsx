// Button.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, color }) => {
    // Nouvel état pour déterminer si une partie du composant doit être affichée
    const [showAdditionalContent, setShowAdditionalContent] = useState(false);

    const buttonStyle = {
        color: color || 'white',
        backgroundColor: 'blue',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        border: 'none',
    };

    return (
        <div>
            <button style={buttonStyle} onClick={onClick}>
                {label}
            </button>

            {/* Afficher la partie supplémentaire si showAdditionalContent est true */}
            {showAdditionalContent && (
                <div style={{ marginTop: '10px', padding: '10px', backgroundColor: 'lightgray' }}>
                    Contenu supplémentaire
                </div>
            )}

            {/* Bouton pour basculer l'état */}
            <button onClick={() => setShowAdditionalContent(!showAdditionalContent)}>
                {showAdditionalContent ? 'Cacher' : 'Afficher'} le contenu supplémentaire
            </button>
        </div>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string,
};

export default Button;
