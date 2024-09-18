import React, { useState } from 'react';
import './Modal.css';

function Modal({ onSave, onCancel }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    if (inputValue.trim() !== '') {
      onSave(inputValue);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Agregar Texto</h2>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleChange} 
          placeholder="Escribe algo..."
        />
        <div className="modal-buttons">
          <button onClick={handleSave}>Guardar</button>
          <button onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
