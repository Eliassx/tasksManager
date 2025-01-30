import { useState, useEffect } from "react";

import "./App.css";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import Title from "./components/Title";

function App() {
  const [tasks, setTask] = useState(
    localStorage.getItem("tb_tasks")
      ? JSON.parse(localStorage.getItem("tb_tasks"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("tb_tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };

    setTask([...tasks, newTask]);
  }

  function onTaskClick(taskID) {
    const newTask = tasks.map((task) => {
      if (task.id === taskID) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });

    setTask(newTask);
  }

  function onDeleteTaskClick(taskID) {
    const allTasks = tasks.filter((task) => {
      if (task.id !== taskID) {
        return task;
      }
    });

    setTask(allTasks);
  }

  return (
    <div className="container">
      <div className="content">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Task
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
