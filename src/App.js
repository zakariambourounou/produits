import React, { useState } from 'react';
import ListeFruits from './ListeFruits';
import Formulaire from './formulaire';

function App() {
  const [fruit, setFruit] = useState([
    { id: 1, name: 'pomme' },
    { id: 2, name: 'orange' },
    { id: 3, name: 'bannane' }
  ]);
  const [name, setName] = useState('');

  function supprime(id) {
    const tableau_filtrer = fruit.filter(item => item.id !== id);
    setFruit(tableau_filtrer);
  }

  function soumettre(e) {
    e.preventDefault();
    const newFruit = { id: fruit.length + 1, name: name };
    setFruit([...fruit, newFruit]);
    setName('');
  }

  function change_name(e) {
    setName(e.target.value);
  }

  return (
    <div className='flex flex-col justify-center bg-gradient-to-r from-indigo-500 to-gray-500 items-center min-h-screen bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-xl font-semibold mb-4'>Liste de fruits</h1>
        <div className='rounded bg-blue-900'>
          <ul>
            {fruit.map(item => (
              <ListeFruits key={item.id} item={item} supprime={supprime} />
            ))}
          </ul>
        </div>
      </div>
      <Formulaire change_name={change_name} soumettre={soumettre} name={name} />
    </div>
  );
}

export default App;
