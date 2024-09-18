import './App.css';
import CreateCard, {CreateCardChildren} from './card';
import TodoList from './TodoList';
import Counter from './Counter';
import Modal from './Modal';
import React, { useState } from 'react';

function App() {

  // Desafío Modal
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addItem = (newItem) => {
    setItems([...items, newItem]);
    closeModal();
  };


  return (
    <div className="App">
      {/* Componentes CreateCard y CreateCardChildren - TA1 Y TA2 */}
      <div className='colums2'>
        {/* Columna izquierda con componentes CreateCard - TA1 */}
        <div className='column-left'>
          <CreateCard 
            title="Proyecto 1 with props"
            description="Descripción del proyecto 1"
            peopleas="Juan Pérez"
            startDate="01-01-2024"
            endDate="31-01-2024"
          />
          <CreateCard 
            title="Proyecto 2 with props"
            description="Descripción del proyecto 2"
            peopleas="Ana García"
            startDate="01-02-2024"
            endDate="28-02-2024"
          />
          <CreateCard 
            title="Proyecto 3 with props"
            description="Descripción del proyecto 3"
            peopleas="Carlos López"
            startDate="01-03-2024"
            endDate="31-03-2024"
          />
        </div>
        {/* Columna derecha con componentes CreateCardChildren - TA2 */}
        <div className='column-right'>
          <CreateCardChildren>
            <h2>Proyecto 1 with children</h2>
            <p>Descripción del proyecto 1</p>
            <p>Asignado a: Juan Pérez</p>
            <p>Fecha de inicio: 01-01-2024</p>
            <p>Fecha de fin: 31-01-2024</p>
          </CreateCardChildren>
          <CreateCardChildren>
            <h2>Proyecto 2 with children</h2>
            <p>Descripción del proyecto 2</p>
            <p>Asignado a: Ana García</p>
            <p>Fecha de inicio: 01-02-2024</p>
            <p>Fecha de fin: 28-02-2024</p>
          </CreateCardChildren>
          <CreateCardChildren>
            <h2>Proyecto 3 with children</h2>
            <p>Descripción del proyecto 3</p>
            <p>Asignado a: Carlos López</p>
            <p>Fecha de inicio: 01-03-2024</p>
            <p>Fecha de fin: 31-03-2024</p>
          </CreateCardChildren>
        </div>
      </div>

        {/* Componente TodoList - TA3 */}
        <TodoList />

        {/* Componente Counter - TA4*/}
        <div className="counter-section">
          <Counter />
        </div>

        {/* Desafío Modal */}
      <div className="modal-section">
        <h2>Desafío Modal</h2>
        <button onClick={openModal}>Agregar</button>

        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}
              <button onClick={() => setItems(items.filter((f, i) => i !== index))}>Eliminar</button>  
            </li>
          ))}
        </ul>

        {isModalOpen && (
          <Modal onSave={addItem} onCancel={closeModal} />
        )}
      </div>

    </div>
  );
}

export default App;
