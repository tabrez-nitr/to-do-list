import { useState } from "react";


const TodoInput = ({setStore , store}) => {
    const [task , setTask] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(task !== '')
        {
            console.log("task added" , task);
            // setStore([...store, task]);   check it again
            setStore((prevStore) => [...prevStore, task]);
            setTask('');
        }
    }
    const changehandler = (e) => {
        setTask(e.target.value);
        console.log(e.target.value);
    }
    return ( 
        <div className="mt-7 mb-8 w-full">
          <form className="w-full" onSubmit={handleSubmit}> 
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