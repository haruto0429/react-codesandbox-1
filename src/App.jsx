import "./styles.css";
import React, { useState } from "react";
import { InputTodo } from "./conponent/InputTodo";
import { IncompleteTodos } from "./conponent/IncompleteTodos";
import { CompleteTodos } from "./conponent/CompleteTodos";

export const App = () => {
  const [todoText, setTodotext] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onchangeTodoText = (event) => {
    setTodotext(event.target.value);
  };
  const onclickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodotext("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newInCompleteTodos = [...incompleteTodos];
    newInCompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newInCompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onchangeTodoText}
        onClick={onclickAdd}
        holder={"TODOを入力"}
      />
      <IncompleteTodos
        todo={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todo={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
