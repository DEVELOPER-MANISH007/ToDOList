import React from "react";
import { useState } from "react";

const App = () => {
  let [toDoList, setToDoList] = useState([]);

  let saveToDoList = (e) => {
    e.preventDefault();

    let toname = e.target.toname.value;

    if (!toDoList.includes(toname)) {
      let finalToDoList = [...toDoList, toname];
      setToDoList(finalToDoList);
      e.target.toname.value = "";
    } else {
      alert("Task already exists");
    }
  };

  const list = toDoList.map((value, idx) => {
    return (
      <ToDoListItem
        value={value}
        key={idx}
        indexNUmber={idx}
        toDoList={toDoList}
        setToDoList={setToDoList}
      />
    );
  });

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" placeholder="Add a new task" />
        <button type="submit">Add</button>
      </form>
      <div className="outerdiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default App;

function ToDoListItem({ value, indexNUmber, toDoList, setToDoList }) {
  let deleteRow = () => {
    let finalData = toDoList.filter((v, i) => i !== indexNUmber);
    setToDoList(finalData);
  };

  return (
    <li>
      {indexNUmber}.{value}
      <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
