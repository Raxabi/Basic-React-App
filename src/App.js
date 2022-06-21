import React, {useState} from 'react';
import {Text, Center, Container} from "@chakra-ui/react"
import './App.css';

// Components
import TaskMaker from "./components/TaskMaker"
import TasksRendered from './components/TaskRendered';

// Utils
import addTask from './components/utils/addNewTask';

function App() {

  const [initialTasks, setInitialTasks] = useState([
    {content: "Bienvenido a Tasklet!"},
    {content: "Estas tareas son creadas inicialmente, pero puedes eliminarlas libremente"},
    {content: "Disfruta de la experiencia y si tienes alguna duda no olvide enviar un mensaje al correo de contacto: taskletContacto@gmail.com"}
  ])

  function AddNewTask(newContentOfNewTask) {
    setInitialTasks(initialTasks.concat([{content: newContentOfNewTask}]))
  }

  return (
    <Container my={"20px"}>
      <Center>
        <Text fontSize={"4xl"} mt={"20px"}>Tasklet</Text>
      </Center>
      <TaskMaker setNewTask={AddNewTask}/>
      <TasksRendered taskProps={initialTasks}/>
    </Container>
  )
};

export default App;