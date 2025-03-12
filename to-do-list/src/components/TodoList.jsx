
const TodoList = ({store,deleteTask}) => {
    return ( 
        <>
        {store.map((task , index) => (
           <div  key={index} className="flex justify-between w-full todocard">
              <h2>{task}</h2>
              <button onClick={() => deleteTask(index)}><i className=" text-amber-200 ri-delete-bin-line text-[17px] hover:opacity-[0.7]"></i></button>
           </div>
        ))}
        </>
     );
}
 
export default TodoList;