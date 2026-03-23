import React, { useState, type ReactNode } from "react";
import AlertMessage from "./AlertMessage";

interface ButtonProps {
  // Define any props if needed in the future
  children: ReactNode;
  style?: string;
}

function Button({ children, style }: ButtonProps) {
  const [clicked, setCLicked] = useState(false);

  const handleCloseAlert = (closed: boolean) => {
    setCLicked(!closed);
  };

  return (
    <>
      <button
        type="button"
        className={`btn ${style || "btn-info"}`}
        onClick={() => setCLicked(!clicked)}
      >
        {children}
      </button>

      {clicked ? <AlertMessage onCloseAlert={handleCloseAlert} /> : null}
    </>
  );
}

export default Button;
