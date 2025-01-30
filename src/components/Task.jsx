import { useNavigate } from "react-router-dom";
import { ArrowRight, Trash, Check } from "@phosphor-icons/react";

import "../../public/css/task.css";
import Button from "./Button";

function Task({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="tasksList">
      {tasks.map((task) => (
        <li className="task" key={task.id}>
          <button
            onClick={() => onTaskClick(task.id)}
            className={`taskBtn ${task.isCompleted && "line"}`}
          >
            {task.isCompleted && <Check size={20} />}
            {task.title}
          </button>

          <Button onClick={() => onSeeDetailsClick(task)}>
            <ArrowRight size={22} />
          </Button>

          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <Trash size={22} />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Task;
