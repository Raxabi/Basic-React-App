import React, {useState, useEffect} from 'react';
import {Text, Center, Container} from "@chakra-ui/react"
import './App.css';

// Components
import TaskMaker from "./components/TaskMaker"
import TasksRendered from './components/TaskRendered';

// Functions
//import { AddNewTask } from './components/utils/addNewTask';

function App() {

  const [initialTasks, setNewInitialTasks] = useState([
    {content: "Bienvenido a Tasklet!"},
    {content: "Estas tareas son creadas inicialmente, pero puedes eliminarlas libremente"},
    {content: "Disfruta de la experiencia y si tienes alguna duda no olvides enviar un mensaje al correo de contacto: tasklet.contacto@gmail.com"}
  ])

  //! 3º initialTasks se actualiza con su funcion correspondiente de useState y añade el valor traido desde el prop a un nuevo array copia de initialTasks
  function addNewTask(contentOfNewTask) {
    setNewInitialTasks(initialTasks.concat([{content: contentOfNewTask}]))
  }

  function deleteNewTask(taskToDelete) {
    setNewInitialTasks(initialTasks.filter(function(i) { return i !== taskToDelete }))
  }

  //* Verificamos una vez al renderizar el componente (por eso el segundo argumento esta vacio) y cargamos lo que haya en el localStorage
  useEffect(() => {
    const taskSaved = localStorage.getItem("task")
    if (taskSaved) {
      setNewInitialTasks(JSON.parse(taskSaved))
    }
  }, [])

  //* Estaremos verificando constantemente cada vez que haya cambios y/o se renderize en initialTasks para guardar lo que se haya guardado
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(initialTasks))
  }, [initialTasks])

  return (
    <Container my={"20px"}>
      <Center>
        <Text fontSize={"4xl"} mt={"20px"}>Tasklet</Text>
      </Center>
      <TaskMaker AddNewTask={addNewTask}/>
      <TasksRendered initialTasks={initialTasks} deleteNewTask={deleteNewTask}/>
    </Container>
  )
};

export default App