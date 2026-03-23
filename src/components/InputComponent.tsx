import React from "react";

interface InputComponentProps {
  data: string;
}

const InputComponent = ({ data }: InputComponentProps) => {
  return (
    <div>
      <input type="text" placeholder={data} />
    </div>
  );
};

export default InputComponent;
