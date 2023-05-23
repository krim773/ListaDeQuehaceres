import React from 'react'

const ListaDeTareas = ({tarea, handleCheckboxChange, handleDelete}) => {
  return (
    <div>
        <ul>
        {tarea.map((item, index) => (
          <li key={index}>
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={item.marcado}
              onChange={() => handleCheckboxChange(index)}
            />

            {/* Texto con estilo de tachado si está marcado, tambien aprovechando y  poniendoun ' ' para tener una separacion con el boton  */}
            <span style={{ textDecoration: item.marcado ? 'line-through' : 'none' }}>
              {item.texto} {''}
            </span>
            {/* este boton sera para ir eliminando los elementos  */}
            <button onClick={() => handleDelete(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaDeTareas
