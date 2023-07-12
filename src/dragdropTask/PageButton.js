import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import TaskList from "./TaskList";

export default function PageButton(compenent) {
  const [state, setState] = useState(false);

  function dropdown() {
    if (state == false) {
      setState(true);
    } else {
      setState(false);
    }
  }

  return (
    <>
      <div className="pagebutton">
        <h1 onClick={dropdown}>Tasks</h1>
      </div>
      {state ? <div>{<TaskList />}</div> : <></>}
    </>
  );
}
