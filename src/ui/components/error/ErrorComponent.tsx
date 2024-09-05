import React from 'react';
import './errorcomponent.scss';

const ErrorComponent: React.FC = () => {
  return (
    <div className="error-container">
        <div>
            <h2>Pokemon no está disponible</h2>
            <p>Por favor, inténtelo de nuevo más tarde.</p>
        </div>
      
    </div>
  );
};

export default ErrorComponent;