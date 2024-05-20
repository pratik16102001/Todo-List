import { useState } from "react";

export function CreateTodos({ onSubmit }){
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    if(newItem === "") return 

    onSubmit(newItem)
    setNewItem("")
  }

  return(
    <>
      <form className="row" onSubmit={handleSubmit}>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text" 
          id="item" 
          placeholder="add your tasks"
        />
        <button>Add</button>
      </form>
    </>
  )
};