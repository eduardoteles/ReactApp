import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  //State for logs
  const [logs, setLogs] = useState<string[]>([]);

  //Handler for selection event
  const setSelectItem = (id: string, data: string) => {
    setLogs([...logs, data]);
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1>Componentes</h1>
            <Alert
              onSelectItem={setSelectItem}
              id="1"
              message="Alerta secção 1"
            >
              <div>
                <h3>Alerta 1</h3>
              </div>
            </Alert>
            <Alert onSelectItem={setSelectItem} id="2" message="Alerta secção2">
              <div>
                <h3>Alerta 2</h3>
              </div>
            </Alert>
          </div>
          <div className="col">
            <div>
              <h1>Logs de operação</h1>
            </div>
            <div>
              Utilizador clicou em{" "}
              {logs.map((log, index) => (
                <div key={index}>
                  {log}
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
