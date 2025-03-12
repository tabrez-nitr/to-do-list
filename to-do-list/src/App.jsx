import { useEffect, useState } from "react";
import TodoInput from "./components/ToDoInput";
import TodoList from "./components/TodoList";

const App = () => {

  const [store, setStore] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });//this allows to render the task on first render and set the value of store 

  useEffect(() => {
       localStorage.setItem('tasks', JSON.stringify(store));
  },[store]); // use effect when we add or delete task to set value to local storage 
   

  // to delete task 

  const deleteTask = (index) =>{
      const updatedArr = store.filter((_ , i)=> i !== index);
      setStore(updatedArr);
  }



  return ( 
    <div className="flex justify-center items-center h-screen">
    <div className="bg-[#1B1833] text-white w-120 min-h-40 max-h-[600px] overflow-y-auto p-5 flex flex-col items-center rounded ">
    <h1 className="text-4xl">Get Things Done!</h1>
        <TodoInput  setStore={setStore} store ={store}/>
        <TodoList store={store} deleteTask ={deleteTask}/>
    </div>
    </div>
   );
}
 
export default App;