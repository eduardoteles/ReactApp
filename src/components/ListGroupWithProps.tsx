import { useState, type MouseEvent } from "react";

interface List {
  title: string;
  items: string[];
}

//Method 3: Using a variable to store the message
//const messageEmpty = List.length === 0 ? "Lista vazia" : null;

//event handler
const handleClick = (event: MouseEvent) => {
  console.log(event);
};

let selectedIndex = -1;

function ListGroupWithProps(props: List) {
  //state hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{props.title}</h1>

      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {props.items[index]}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupWithProps;
