import { useRef, useState } from "react";
import InputComponent from "./InputComponent";

function RefHook() {
  let ref = useRef(0);
  const [counter, setCounter] = useState(null);

  function handleClick() {
    ref.current = ref.current + 1;
    setCounter(ref.current);
    console.log("You clicked " + ref.current + " times!");
  }
  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <input type="text" value="" placeholder={counter} />
    </>
  );
}

export default RefHook;
