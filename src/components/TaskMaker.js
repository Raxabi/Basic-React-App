import React, { useState } from "react"
import {
  FormLabel,
  Input,
  Button,
  Textarea,
  Box
} from '@chakra-ui/react'

function TaskMaker({setNewTask}) {
  // Our "key" and "value", represent at the final an object in the localStorage, and we need to call "setKey" and "addValue" to update the value of that object, in first instance, our object haven't nothing inside
  const [ tasks, setTasks ] = useState([])

  const saveTask = (e) => {
    e.preventDefault()
    localStorage.setItem("task", setNewTask(tasks))
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
            setTasks(change.target.value)
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