import React from "react"
import {Text, Box, Center} from "@chakra-ui/react"

function TasksRendered({initialTasks}) {
  return (
    <div>
      <Center>
          <Text fontSize={"3xl"} mt={"4"}>Tareas</Text>
      </Center>
      <div>
        {initialTasks.map(tasks => 
          <Box key={tasks.content} my={"4"} borderRadius={"5"} backgroundColor={"white"} color={"black"} p={"3"} pb={"50"}>
            <Center>
              <Text m={"auto"}>
                {tasks.content}
              </Text>
            </Center>
          </Box>
        )}
      </div>
    </div>
  )
}

export default TasksRendered