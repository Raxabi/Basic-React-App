import React, { useState } from "react";
import {Box} from "@chakra-ui/react"

function Tasks({localStorage}) {
  return (
    <div>
      <Box border={"2px"} p={"10px"} mt={"15px"}>
        <Box mt={"30px"} p={"5px"} maxWidth={"max-content"} border={"1px"} borderColor={"gray.200"}>
          <h1>
            {props.name}
          </h1>
        </Box>
      </Box>
    </div>
  )
}

export default Tasks