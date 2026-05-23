import React from "react";

function Todo() {
  const [todo, setTodo] = useState();
  
  return (
    <div>
      <input type="text" />
      <button>Add</button>
    </div>
  );
}

export default Todo;
