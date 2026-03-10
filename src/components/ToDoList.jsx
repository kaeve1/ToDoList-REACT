import React, { useState } from 'react'

import styles from './ToDoList.module.css'

const GetRandom = () => {
    return Math.random();
}

const ToDoList = () => {

    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])
    const addTask = () => {
        if (task.trim() === "") {
            setTask("") 
            return
        } if (task.length >= 30) {
            setTask("")
            return alert("Too Much Characters!") 
        }
        const formattedTask = task.charAt(0).toUpperCase() + task.slice(1)

        setTasks([...tasks, formattedTask])
        setTask("")
    }

    const removeTasks = () => {
        setTasks([])

    }
    const removeTask = (indexToRemove) => {
        setTasks(tasks.filter((_, index) => index !== indexToRemove))
    }

    const mensagemUm = "Enter your First Task..."
    const mensagens = [
        "Adicione uma tarefa",
        "Qual seu proximo passo?",
        "Qual a boa da vez",
        "Vai dar Tempo!",
        "And Now?",
        "What's your next step?"

    ]
    let random = GetRandom()
    const msg = mensagens[Math.floor(random * mensagens.length)];

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>
                <div className={styles.to}>TO</div>
                <div className={styles.do}>DO</div>
                <div className={styles.list}>List</div>
            </h1>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder={tasks.length == 0 ? mensagemUm : msg}
                    className={styles.input}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addTask();
                        }
                    }}
                />

                <button onClick={addTask} className={styles.button}>Adicionar</button>
            </div>
            <ul className={styles.taskList}>
                {tasks.map((taskItem, index) => (
                    <li key={index} className={styles.taskItem} onClick={() => removeTask(index)}>{taskItem}</li>

                ))}
            </ul>

            {tasks.length > 1 &&
                <button className={styles.removeBttn} onClick={removeTasks}>Remove All Tasks</button>
            }
            {tasks.length > 0 &&
                <p className={styles.p1}>Clique em uma Task para remove-la</p>
            }
        </div>


    )


}

export default ToDoList