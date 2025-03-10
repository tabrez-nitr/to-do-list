

const TodoInput = () => {
    return ( 
        <div className="mt-7 mb-8 w-full">
          <form className="w-full"> 
            <input type="text" placeholder="What is the task today? "/>
            <button className="addtaskbtn">Add Task</button>
          </form>
        </div>
     );
}
 
export default TodoInput;