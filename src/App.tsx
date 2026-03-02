import ListGroupWithProps from "./components/ListGroupWithProps";

function App() {
  const Cities = [
    "Funchal",
    "Santa Cruz",
    "Rib Brava",
    "Calheta",
    "Porto Moniz",
  ];

  const Countries = ["Portugal", "Espanha", "França", "Itália", "Alemanha"];

  return (
    <div>
      <ListGroupWithProps items={Cities} title="Cities" />
      <ListGroupWithProps items={Countries} title="Countries" />
    </div>
  );
}
export default App;
