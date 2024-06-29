import { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";

import { useDispatch } from "react-redux";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
  
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setTask(e.target.value)}></input>
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
