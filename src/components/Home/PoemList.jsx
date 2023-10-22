import React from 'react';
import './PoemList.css'



const PoemList = ({ poems}) => {
  return (
    <div className='Contenedor'>
      
      <h2>Colores</h2>
      {poems.map((poem) => (
        <div key={poem.id} className={poem.color} id='contenido'>
          <p className='Encabezado'> {poem.nombre} | {poem.color}</p>           
          <p className='Alma'>{poem.poema}</p>
        </div>
      ))}
    </div>
  );
};

export default PoemList;
