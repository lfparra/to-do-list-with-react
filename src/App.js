import React, { useState } from 'react';

const App = () => {
    
    const[state, setState] = useState({
        inputTasks : [],
        
    })

    const handleChangeInput = e => {
        /* console.log(e.key) */
        if(e.key === "Enter" && e.target.value !== ""){
            /* console.log(e.target.value); */
            let data = {
                inputTasks : [...state.inputTasks, e.target.value] //["tarea1", "tarea2", "tarea3", "nuevaTarea"],
            }
            setState(prevState => {
                return { ...prevState, ...data }
            })
            e.target.value = "";
        }
    }

    const deleteTask = e => {
        console.log(e.target.id);
        let data = {
            /* inputTasks:  */
            }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }

    return (
        <div className="post-it">
            <input type="text" placeholder="Press enter" onKeyPress={handleChangeInput} />
            <ul>
                {
                    state.inputTasks.length > 0?
                    (
                        state.inputTasks.map((elem, index,arr)=>{
                            return <li>{arr[index]}<i class="fas fa-trash-alt" onClick={deleteTask} id={index}></i></li>
                        })
                    ) :
                    (
                        <span>No hay tareas Pedientes</span>
                    )
                }
                
            </ul>
        </div>
    )
}

export default App;