import { useState } from "react";


const TodoInput = ({setStore , store}) => {
    const [task , setTask] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim() !== '')
        {
            console.log("task added" , task);

            setStore((prevStore) => [...prevStore, task.trim()]);
            setTask('');
        }
    }
    const changehandler = (e) => {
        setTask(e.target.value);
        console.log(e.target.value);
    }
    return ( 
        <div className="mt-7 mb-8 w-full">
          <form id="form" className="w-full" onSubmit={handleSubmit}> 
            <input 
            value={task} 
            type="text" 
            placeholder="What is the task today? "
            onChange={changehandler} 
            />
            <button className="addtaskbtn" type="submit">Add Task</button>
          </form>
        </div>
     );
}
 
export default TodoInput;