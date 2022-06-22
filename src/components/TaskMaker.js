import React, { useState } from "react"
import {
  FormLabel,
  Button,
  Textarea,
} from '@chakra-ui/react'

function TaskMaker({AddNewTask}) {
  // taskMaker receive a prop as argument that is a function
  const [ incomingTasks, setIncomingTasks ] = useState([])

  // Save the task that was provided by the prop argument
  const saveTask = (e) => {
    e.preventDefault()
    AddNewTask(incomingTasks)
    localStorage.setItem("task", incomingTasks)
  }

  return (
    <div>
      <form 
      id="TaskForm"
      onSubmit={saveTask}>
        <FormLabel>Contenido de la tarea</FormLabel>
        <Textarea
          type={"text"} 
          onChange={(change) => {
            setIncomingTasks(change.target.value)
          }}
        />
        <Button
          type="submit"
          colorScheme={"blue"}
          marginTop={4}>Añadir tarea</Button>
      </form>
    </div>
  );
}

export default TaskMaker