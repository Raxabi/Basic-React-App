import React from "react"
import {Text, Box, Center, Button} from "@chakra-ui/react"

function TasksRendered({initialTasks, deleteNewTask}) {

  return (
    <div>
      <Center>
          <Text fontSize={"3xl"} mt={"4"}>Tareas</Text>
      </Center>
      <div>
        {initialTasks.map(tasks => //! 4º Finalmente renderizamos las tareas existentes en el array initialTasks
          <Box key={tasks.content} my={"4"} borderRadius={"5"} backgroundColor={"white"} color={"black"} p={"3"} pb={"50"}>
            <Center>
              <Text m={"auto"}>
                {tasks.content}
              </Text>
            </Center>
            <Center>
              <Button
                colorScheme={"red"}
                mt={"20px"}
                onClick={() =>
                  deleteNewTask(tasks)
                }
              >
                Eliminar tarea
              </Button>
            </Center>
          </Box>
        )}
      </div>
    </div>
  )
}

export default TasksRendered