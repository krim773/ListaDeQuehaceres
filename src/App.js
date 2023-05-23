import { useEffect, useState } from 'react';
import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import Tareas from './components/Tareas';

function App() {
  
  const [tarea, setTarea] = useState([]);
  

  // useEffect utilizado para que cargue lo que se habia guardado
  useEffect(() => {
    localStorage.setItem('tarea', JSON.stringify(tarea));
  }, [tarea]);

  useEffect(() => {
    const storedTarea = localStorage.getItem('tarea');
    if (storedTarea) {
      setTarea(JSON.parse(storedTarea));
    }
  }, [])



   // Controlador de eventos para el cambio del checkbox
   const handleCheckboxChange = (index) => {
    const updatedList = [...tarea];
    updatedList[index].marcado = !updatedList[index].marcado;
    setTarea(updatedList);
  };


  // esta funciones la que se utiliza para borrar los elementos de la lista
  const handleDelete = (index) => {
    const updatedList = [...tarea];
    updatedList.splice(index, 1);
    setTarea(updatedList);
  };
  
  

  return (
    <div>
      <Tareas setTarea={setTarea} tarea={tarea}/>
      <ListaDeTareas tarea={tarea} handleCheckboxChange={handleCheckboxChange} handleDelete={handleDelete} />

    </div>
  );
}


export default App;
