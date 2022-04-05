import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "./action";
export const TodoInput = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      name,
      status: false,
      id: uuid(),
    };
    dispatch(addTodo(payload));
    setName("");
  };
  return (
    <div>
      <input
        placeholder="Add todos"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};
