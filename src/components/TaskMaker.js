import React, { useState, createRef } from "react"
import {
  FormLabel,
  Button,
  Input
} from '@chakra-ui/react'

// taskMaker receive two props as argument that are functions, one of them that save tasks and another that delete a task
function TaskMaker({AddNewTask}) {
  
  const [ incomingTasks, setIncomingTasks ] = useState([])

  const emptyValue = createRef()

  // Save the task that was provided by the prop argument
  const saveTask = (e) => {
    e.preventDefault()
    AddNewTask(incomingTasks) //! 2º Se manda el valor hacia el prop
    localStorage.setItem("task", incomingTasks)
    emptyValue.current.value = ""
  }

  return (
    <div>
      <form 
      id="TaskForm"
      onSubmit={saveTask}>
        <FormLabel>Contenido de la tarea</FormLabel>
        <Input
          type={"text"}
          onChange={(change) => {
            setIncomingTasks(change.target.value) //! 1º Actualiza el valor de incomingTasks con el valor del input
          }}
          ref={emptyValue}
        />
        <Button
          type="submit"
          colorScheme={"blue"}
          marginTop={4}>Añadir tarea
        </Button>
      </form>
    </div>
  );
}

export default TaskMaker