import React, { useState } from "react";

const Tareas = ({ tarea, setTarea }) => {
  const [texto, setTexto] = useState("");

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  const handleTareas = (e) => {
    e.preventDefault();
    console.log(tarea);
    // Aquí puedes hacer algo con el texto ingresado, como guardarlo en la lista de textos
    if (texto !== "") {
      setTarea([...tarea, { texto: texto, marcado: false }]);
      // Limpia el campo de entrada después de agregar el texto a la lista
      setTexto("");
    }
    console.log(tarea);
  };


  

  return (
    <div>
      <form onSubmit={handleTareas}>
        <input type="text" value={texto} onChange={handleChange} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Tareas;
