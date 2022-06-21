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

/*
  !Ignore this TEST!
  ***
    import { Test } from './components/test';

    function tryingProps(nombre) {
      if (nombre.length === 0) {
        console.log("Hello props")
      } else {
        console.log("Hello " + nombre)
      }
    }

    <Test>
      <h1 functionTest={tryingProps("Juan")}></h1>
    </Test>
  ***
*/