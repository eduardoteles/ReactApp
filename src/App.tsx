import Alert from "./components/Alert";

function App() {
  //Handler for selection event
  const handleSelectItem = (data: string) => {
    console.log(data);
  };

  return (
    <>
      <Alert onSelectItem={handleSelectItem}>
        <div>Alerta</div>
      </Alert>
    </>
  );
}

export default App;
