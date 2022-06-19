import React, { useState } from "react"
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react'

function TaskForm() {
  // Our "task", represent the task, and we need to call "addTask" to update the value of "task", in first instance, "task" hasn't nothing inside
  const [ task, addTask ] = useState()
    
  const taskSaver = (e) => {
    e.preventDefault()
    localStorage.setItem("task", task)
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <FormControl>
        <FormLabel onSubmit={taskSaver}>Email address</FormLabel>
        <Input type="text"
          onChange={(change) => {
            addTask(change.target.value)
          }}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </div>
  );
}

export default TaskForm