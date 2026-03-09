import ListGroupWithProps from "./components/ListGroupWithProps";

function App() {
  const Cities = [
    "Funchal",
    "Santa Cruz",
    "Rib Brava",
    "Calheta",
    "Porto Moniz",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return <div></div>;
}
export default App;
