import {useState} from "react"
import style from "./Formtodo.module.css";

const TodoInput = ({onSubmit}) => {
    const [formState, setformState] =useState({
        title:"",
        description:"",
    })
    const handleChange=(e) => {
        setformState({
            ...formState,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formState);
    }

    return (
        <form onSubmit={handleSubmit} className={style.todoInput}>
            <div style={{padding: 5}}>
                <input type="text" 
                placeholder="Type here Description"
                name="title" 
                value={formState.title}
                onChange={handleChange}
                
                />            
                </div>
                <div style={{padding: 5}}>
                    <input type="text"
                    placeholder="Type here Description"
                    name="description"
                    value={formState.description}
                    onChange={handleChange}
                    />
                </div>
                <div style={{padding: 5}}>
                    <input type="submit"
                    value="Submit"
                    className={style.submit}
                    />
                </div>
        </form>
    )

}

export default TodoInput;