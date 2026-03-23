import { createContext, useContext, useState } from "react";

interface GlobalState {
  isToogle: boolean;
  setIsToogle: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const GlobalStateContext = createContext<GlobalState | null>(null);

//ChildToogle component
const ChildToogle = () => {
  const { setIsToogle } = useContext(GlobalStateContext);
  return (
    <div>
      <button onClick={() => setIsToogle((prev: boolean) => !prev)}>
        Toogle state
      </button>
    </div>
  );
};

//ChildDisplay component
const ChildDisplay = () => {
  const { isToogle } = useContext(GlobalStateContext);
  return (
    <div>
      <p>Current status: {isToogle ? "ON" : "OFF"}</p>
    </div>
  );
};
function ContextComponent() {
  const [isToogle, setIsToogle] = useState(false);
  return (
    <GlobalStateContext.Provider value={{ isToogle, setIsToogle }}>
      <div>
        <h1>Parent Component</h1>
        <ChildToogle />
        <ChildDisplay />
      </div>
    </GlobalStateContext.Provider>
  );
}
export default ContextComponent;
