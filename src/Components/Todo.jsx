import {useState} from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import style from "./Formtodo.module.css";

const Todo = () => {
    const [todo, setTodos] =useState([]);
    const [showComplete, setShowComplete] = useState(true);

    const handleSubmit = ({title, description}) => {
        const payload ={
            id: todo.length+1,
            title,
            description,
            status: true,
        }
        setTodos([...todo,payload])
    }
    return (
        <div className="{style.Todos}">
          <h1>React LIST Todo Filter</h1>
          <TodoInput onSubmit={handleSubmit}/>
          <TodoList data={todo.filter(item => showComplete ? true: !item.status).map(item =>item)}/>
          <div>
             <button onClick={() => setShowComplete(!showComplete)} className={style.button}>
             {showComplete===true? "HIDE COMPLETED":"SHOW COMPLETED"}
             </button>
         </div>
        </div>
    )
}
export default Todo;