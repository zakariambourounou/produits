import React from 'react';

function Formulaire({ change_name, soumettre, name }) {
 

  return (
    <form onSubmit={soumettre} className='flex flex-col items-center mt-4'>
      <label htmlFor="fruitInput" className="mb-2">Entrez un fruit :</label>
      <input 
        id="fruitInput"
        onChange={change_name} 
        value={name} 
        type='text' 
        placeholder='Entrez un fruit' 
        className='mb-2 p-2 border rounded' 
      />
      <button type='submit' className='bg-gradient-to-r rounded-md p-2 from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>Ajouter</button>
    </form>
  );
}

export default Formulaire;
