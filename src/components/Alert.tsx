import React, { use, useState, type ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onSelectItem: (item: string) => void;
}

function Alert({ children, onSelectItem }: AlertProps) {
  //const [selectedItem, setSelectedItem] = useState("");
  const [selectStyle, setSelectStyle] = useState(true);

  return (
    <>
      <div
        className={selectStyle ? "alert alert-primary" : "alert alert-danger"}
        role="alert"
        onClick={() => {
          setSelectStyle(!selectStyle);
          onSelectItem("Alert Clicked");
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Alert;
