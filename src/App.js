import React, {useState, useEffect} from 'react';
import {Text, Center, Container} from "@chakra-ui/react"
import './App.css';

// Components
import TaskMaker from "./components/TaskMaker"
import TasksRendered from './components/TaskRendered';

function App() {


  const [initialTasks, setNewInitialTasks] = useState([
    {content: "Bienvenido a Tasklet!"},
    {content: "Estas tareas son creadas inicialmente, pero puedes eliminarlas libremente"},
    {content: "Disfruta de la experiencia y si tienes alguna duda no olvides enviar un mensaje al correo de contacto: tasklet.contacto@gmail.com"}
  ])

  // Define function that add a new task
  function AddNewTask(newContentOfNewTask) {
    setNewInitialTasks(initialTasks.concat([{content: newContentOfNewTask}]))
  }

  // Necesitamos verificar si en el primer render del componente hay datos, por lo que usamos un array vacio como segundo argumento para useEffect
  useEffect(() => {
    const taskSaved = localStorage.getItem("task")
    if (taskSaved) {
      setNewInitialTasks(JSON.parse(taskSaved))
    }
  }, [])

  // Revisamos si el array initialTasks ha cambiado, si ha cambiado guardaremos esos cambios
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(initialTasks))
  }, [initialTasks])

  return (
    <Container my={"20px"}>
      <Center>
        <Text fontSize={"4xl"} mt={"20px"}>Tasklet</Text>
      </Center>
      <TaskMaker AddNewTask={AddNewTask}/>
      <TasksRendered initialTasks={initialTasks}/>
    </Container>
  )
};

export default App;