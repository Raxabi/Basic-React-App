import React, { useState } from "react"
import {
  FormLabel,
  Input,
  Button,
  Textarea
} from '@chakra-ui/react'

function TaskForm() {
  // Our "key" and "value", represent at the final an object in the localStorage, and we need to call "setKey" and "addValue" to update the value of that object, in first instance, our object haven't nothing inside
  const [ task, setTask ] = useState([
    {"name": "Tarea1", "content": "Contenido de la Tarea 1"}
  ])

  const saveTask = (e) => {
    e.preventDefault()
    localStorage.setItem("task",  JSON.stringify(task))
  }

  return (
    <div>
      <form 
      id="TaskForm"
      onSubmit={saveTask}>
        <FormLabel>Nombre de la tarea</FormLabel>
        <Input
          type={"text"}/* 
          onChange={(change) => {
            setTask(change.target.value)
          }} */
        />
        <FormLabel>Contenido de la tarea</FormLabel>
        <Textarea/>
        <Button
          type="submit"
          colorScheme={"blue"}
          marginTop={4}>Añadir tarea</Button>
      </form>
    </div>
  );
}

export default TaskForm