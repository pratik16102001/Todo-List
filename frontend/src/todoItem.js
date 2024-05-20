

export function TodoItem({ id, title, toggleTodo, deleteTodo }){

  function handleClick(e){
    if(e.target.checked === true){
      e.target.offsetParent.classList.add('checked-todo')
    }else{
      e.target.offsetParent.classList.remove('checked-todo')
    }
  }

  return (
    <li>
      <input 
        type="checkbox"
        className="todo-check" 
        onChange={e => toggleTodo(id, e.target.value)}
        onClick={e => handleClick(e)}
      />
      {title}
      <span onClick={() => deleteTodo(id)}>x</span>
    </li>
  )
}