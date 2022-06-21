import React from "react"
import {Text, Box, Center} from "@chakra-ui/react"

function TasksRendered({taskProps}) {
    return (
        <div>
            <Center>
                <Text fontSize={"3xl"} mt={"4"}>Tareas</Text>
            </Center>
            <div>
                {taskProps.map(tasks => 
                    <Box key={tasks.content} my={"4"} borderRadius={"5"} backgroundColor={"white"} color={"black"} p={"3"} pb={"50"}>
                        {tasks.content}
                    </Box>
                )}
            </div>
        </div>
    )
}

export default TasksRendered