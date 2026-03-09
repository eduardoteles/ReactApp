import React, { use, useState, type ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

function Alert({ children }: AlertProps) {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectStyle, setSelectStyle] = useState(0);

  return (
    <>
      <div
        className="alert alert-primary"
        role="alert"
        onClick={(event) => setSelectedItem(event.target.innerText)}
      >
        {children}
      </div>
      <div>{selectedItem}</div>
    </>
  );
}

export default Alert;
