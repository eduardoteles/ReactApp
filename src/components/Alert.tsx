import React, { use, useState, type ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onSelectItem: (id: string, item: string) => void;
  id: string;
  message: string;
}

function Alert({ children, onSelectItem, id, message }: AlertProps) {
  const [selectStyle, setSelectStyle] = useState(true);

  return (
    <>
      <div
        className={selectStyle ? "alert alert-primary" : "alert alert-danger"}
        role="alert"
        onClick={() => {
          setSelectStyle(!selectStyle);
          onSelectItem(id, message);
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Alert;
