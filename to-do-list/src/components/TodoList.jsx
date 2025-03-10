
const TodoList = ({store}) => {
    return ( 
        <>
        {store.map((task , index) => (
           <div  key={index} className="flex justify-between w-full todocard">
              <h2>{task}</h2>
              <button>Delete</button>
           </div>
        ))}
        </>
     );
}
 
export default TodoList;