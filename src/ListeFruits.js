import React from 'react';

function ListeFruits({ item, supprime }) {
  return (
    <li className='flex justify-between items-center p-2 m-2 w-64 shadow bg-blue-900 text-white'>
      {item.name}
      <button onClick={() => supprime(item.id)} className='ml-2 bg-red-500 text-white p-1 rounded'>X</button>
    </li>
  );
}

export default ListeFruits;
