import React, { useState } from "react";
import TaskList from "./TaskList";
const [state, setState] = useState(true);
function dropdown() {
  setState = true;
}

export default function DropdownTask() {
  return (
    <div onMouseEnter={dropdown}>{state == true ? <TaskList /> : <></>}</div>
  );
}
