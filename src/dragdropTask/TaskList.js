import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import InputField from "./InputFeild";
import Task from "./Task";

export default function TaskList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [CompletedTodos, setCompletedTodos] = useState([]);

  const addTask = (e) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo }]);
      setTodo("");
    }
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = CompletedTodos;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="task-App">
        <h1>TakeNotes</h1>
        <InputField todo={todo} setTodo={setTodo} addTask={addTask} />
        <Task
          todos={todos}
          setTodos={setTodos}
          CompletedTodos={CompletedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
}
