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
        let data = state.inputTasks.splice(e.target.id, 1);

        setState(prevState => {
            return { ...prevState, ...data }
        })
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="post-it">
                    <h3>To-Do List</h3>
                    <input type="text" placeholder="Press enter" onKeyPress={handleChangeInput} />
                    <ul>
                        {
                            state.inputTasks.length > 0 ?
                                (   
                                    state.inputTasks.map((elem, index, arr) => {
                                        return (
                                            <>
                                            <li key={index}>{arr[index]}<i className="fas fa-trash-alt" onClick={deleteTask} id={index}></i></li>
                                            </>
                                        )
                                    })
                                ) :
                                (
                                    <li>No hay tareas Pedientes</li>
                                    )
                            }
                    </ul>
                    <h5>Tareas pendientes: {state.inputTasks.length}</h5>
                </div>
            </div>
        </div>

    )
}

export default App;