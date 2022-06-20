import React, {useState} from "react";

function Test() {
    
  const [ number, setNumber ] = useState(0)

  return (
    <div>
      <h1>Valor del numero: {number}</h1>
        <button onClick={() => setNumber(number + 1)}>Incrementar valor</button>
    </div>
  )
}

export default Test;