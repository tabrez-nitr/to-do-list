import TodoInput from "./components/ToDoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return ( 
    <div className="flex justify-center items-center h-screen">
    <div className="bg-[#1B1833] text-white w-120 h-150 p-5 flex flex-col items-center rounded ">
    <h1 className="text-4xl">Get Things Done!</h1>
        <TodoInput/>
        <TodoList/>
    </div>
    </div>
   );
}
 
export default App;