import { useState } from "react";
import '../../public/css/addTask.css'

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="form">
            <input type="text" placeholder="Digite o título da tarefa" value={title} onChange={(event) => setTitle(event.target.value)} />
            <input type="text" placeholder="Digite a descrição da tarefa" value={description} onChange={(event) => setDescription(event.target.value)} />
            <button 
                onClick={() => {
                    if(!title.trim() || !description.trim()) {
                        alert('Preencha o título da descrição da tarefa')
                    } else {
                        onAddTaskSubmit(title, description);
                        setTitle("");
                        setDescription("");
                    }

                }}
            >
                Adicionar
            </button>
        </div>
    )
}

export default AddTask;