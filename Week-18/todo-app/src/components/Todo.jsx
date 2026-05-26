import React, { useState } from "react";

function todo() {
  const [todo, setTodo] = useState("");

  const [todoarr, setTodarr] = useState([]);
  const [editId, setEditId] = useState(null);

  const handelFrom = (e) => {
    e.preventDefault();
    // remove extra spaces
    if (todo.trim() === "") {
      return;
    }

    if (editId) {
      const updateTod = todoarr.map((item) => {
        if (item.id == editId) {
          return {
            ...item,
            todo: todo,
          };
        }
        return item;
      });

      setTodarr(updateTod);

      setEditId(null);
    } else {
      setTodarr((pre) => [
        ...pre,
        {
          todo,
          id: Date.now(),
        },
      ]);
    }

    setTodo("");
  };

  const handeledit = (id) => {
    const todo = todoarr.find((item) => {
      return item.id == id;
    });

    setTodo(todo.todo);
    setEditId(todo.id);
  };

  const handelDelet = (id) => {
    const updatedTodos = todoarr.filter((item) => {
      return item.id != id;
    });

    setTodarr(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handelFrom}>
        <input
          type="text"
          value={todo}
          placeholder="Add a task..."
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button type="submit">{editId ? "Update " : "Add"}</button>
      </form>

      <div>
        {todoarr.length > 0 ? (
          <div>
            <ul>
              {todoarr.map((t) => {
                return (
                  <li key={t.id}>
                    {t.todo}

                    <span>
                      <button
                        type="button"
                        onClick={() => {
                          handeledit(t.id);
                        }}
                      >
                        {editId ? "editing " : "Edit"}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handelDelet(t.id);
                        }}
                      >
                        Delete
                      </button>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div>
            <p>No todos available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default todo;
