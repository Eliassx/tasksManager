import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

import Title from "../components/Title";

import "../../public/css/taskPage.css";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="container">
      <div className="taskDetails">
        <div className="taskHeader">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={25} />
          </button>
          <Title>Detalhes da Tarefa</Title>
          <div></div>
        </div>

        <div className="taskContent">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
