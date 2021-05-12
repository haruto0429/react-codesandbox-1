import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, holder } = props;
  return (
    <div className="input-area">
      <input placeholder={holder} value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
