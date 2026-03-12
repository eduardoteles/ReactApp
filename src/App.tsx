import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  //State for logs
  const [logs, setLogs] = useState("");

  //Handler for selection event
  const onSelectItem = (logs: string) => {
    console.log("Item selecionado:", logs);
    setLogs(logs);
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1>Componentes</h1>
            <Alert onSelectItem={onSelectItem} id="secção de alerta 1">
              <div>
                <h3>Alerta 1</h3>
              </div>
            </Alert>
            <Alert onSelectItem={onSelectItem} id="secção de alerta numero 2">
              <div>
                <h3>Alerta 1</h3>
              </div>
            </Alert>
          </div>
        </div>
        <div className="col">
          <div>Logs de operação</div>
          <div>Utilizador clicou em {logs}</div>
        </div>
      </div>
    </>
  );
}

export default App;
