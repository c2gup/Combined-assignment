import { useState } from "react";

// function Todo() {
//   const [todo, setTodo] = useState("");

//   const [todoarr, settodoarr] = useState([]);

//   const submitTodo = (e) => {
//     e.preventDefault();

//     settodoarr([
//       ...todoarr,
//       {
//         id: Date.now(),
//         todo: todo,
//       },
//     ]);
//     setTodo("");
//   };

//   const editHandel = (id) => {
//     const edit = todoarr.find((item) => item.id === id);
//     console.log(edit);
//     setTodo(edit.todo);
//   };

//   const DeletHandel = (id) => {
//     console.log(id);

//     const onlyMatched = todoarr.filter((item) => item.id !== id);
//     settodoarr(onlyMatched);
//   };

//   console.log(todoarr);

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           name="todo"
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//         />
//         <button onClick={submitTodo}>Add</button>
//       </div>

//       <div className="bg-red-500   ">
//         <ul>
//           {todoarr.map((todo) => {
//             return (
//               <li key={todo.id} className="flex">
//                 {todo.todo}

//                 <button
//                   onClick={() => {
//                     editHandel(todo.id);
//                   }}
//                 >
//                   edit
//                 </button>
//                 <button
//                   onClick={() => {
//                     DeletHandel(todo.id);
//                   }}
//                 >
//                   delet
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Todo;

import React from "react";

function todo() {
  const [todo, setTodo] = useState("");
  const [todoarr, setTodoarr] = useState([]);
  const [userName, setUserName] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!todo || !userName) {
      alert("Pleae fill it correctly");
      return;
    }
    setTodoarr([...todoarr, { todo, user: userName, id: Date.now() }]);

    setTodoarr((prev) => [...prev, { todo, user: userName, id: Date.now() }]);
    setTodo("");
    setUserName("");
  };

  console.log(todoarr);
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />

        <input
          type="text"
          value={userName}
          name="userName"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button type="submit">Added</button>
      </form>

      <div>
        <ul>
          {todoarr.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.todo}

                <span>{todo.user}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default todo;
