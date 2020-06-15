import React, { useState } from 'react';

const App = () => {

    const [state, setState] = useState({
        inputTasks: [],
    })

    const handleChangeInput = e => {
        /* console.log(e.key) */
        if (e.key === "Enter" && e.target.value !== "") {
            /* console.log(e.target.value); */
            let data = {
                inputTasks: [...state.inputTasks, e.target.value] //["tarea1", "tarea2", "tarea3", "nuevaTarea"],
            }
            setState(prevState => {
                return { ...prevState, ...data }
            })
            e.target.value = "";
        }
    }

    const deleteTask = e => {
        console.log(e.target.id);
        let index = e.target.id;
        console.log(index);
        let data = state.inputTasks.splice(e.target.id,1); 
        
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }

    return (
        <div className="row">
            <div className="offset-lg-2 col-lg-8">
                <div className="post-it">
                    <h3>To-Do List</h3>
                    <input type="text" placeholder="Press enter" onKeyPress={handleChangeInput} />
                    <ul>
                        {
                            state.inputTasks.length > 0 ?
                                (
                                    state.inputTasks.map((elem, index, arr) => {
                                        return <li key={index}>{arr[index]}<i className="fas fa-trash-alt" onClick={deleteTask} id={index}></i></li>
                                    })
                                ) :
                                (
                                    <span>No hay tareas Pedientes</span>
                                )
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default App;