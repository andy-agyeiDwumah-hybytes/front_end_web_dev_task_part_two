// React
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./ToDoListForm.module.css";
// Components
import ToDoListItems from "../toDoListItems/ToDoListItems";

const LOCALSTORAGEKEY = "react-todos";
const MAXLENGTHFORTEXTINPUT = 20;

export default function ToDoListForm() {

  // Gets todos from local storage (if any)
  const initialiseTodos = () => {
    const localValue = localStorage.getItem(LOCALSTORAGEKEY);
    if (localValue === null) return [];

    // On page refresh OR when component mounts set editing to false
    const localValueObj = JSON.parse(localValue).map(item => {
      if (item.editing === true) {
        return { ...item, editing: false };
      } else {
        return item;
      }
    });
    return localValueObj;
  }

  const [newTodo, setNewTodo] = useState("");
  // Gets called once during initialisation
  const [todos, setTodos] = useState(initialiseTodos);
  // Will be used when editing a todo item
  const [editText, setEditText] = useState("");

  useEffect(() => {
    // Save todos to local storage when updated
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(todos));
  }, [todos]);

  const handleOnChange = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Prevent user from submitting empty data
    if (newTodo === "") return;
    setTodos(currentTodosArr => {
      return [
        ...currentTodosArr,
        {
          id: uuidFromUuidV4(),
          title: newTodo,
          completed: false,
          editing: false,
        },
      ];
    });
    setNewTodo("");
  };

  // Generates random ID for each todo item
  const uuidFromUuidV4 = () => {
    return uuidv4();
  };

  const toggleTodo = (todoId, completed) => {
    setTodos(currentTodosArr => {
      // Check if any todo item matches todo clicked on
      return currentTodosArr.map(item => {
        if (item.id === todoId) {
          return { ...item, completed };
        }
        // Return item if it doesn't match todoId
        return item;
      });
    });
  };

  const deleteTodo = todoId => {
    setTodos(currentTodosArr => {
      return currentTodosArr.filter(item => item.id !== todoId);
    });
  };

  const editTodo = todoId => {
    setTodos(currentTodosArr => {
      return currentTodosArr.map(item => {
        if (item.id === todoId) {
          return { ...item, editing: true };
        }
        // Important: This allows only one item to be edited at a time
        return { ...item, editing: false };
      });
    });
  };

  const cancelEditingTodo = todoId => {
    setTodos(currentTodosArr => {
      return currentTodosArr.map(item => {
        if (item.id === todoId) {
          return { ...item, editing: false };
        }
        return item;
      });
    });
    setEditText("");
  };

  const saveEditedTodo = (todoId, newTitle) => {
    if (newTitle === "") return;
    setTodos(currentTodosArr => {
      return currentTodosArr.map(item => {
        if (item.id === todoId) {
          return { ...item, editing: false, title: newTitle };
        }
        return item;
      });
    });
    setEditText("");
  };

  return (
    <main className={styles.main}>
      <form
        className={styles.toDoListForm}
        onSubmit={handleSubmit}
        aria-label="Add todo"
      >
        <div>
          <input
            type="text"
            id="add-new-item"
            name="add-new-item"
            maxLength={MAXLENGTHFORTEXTINPUT}
            className={styles.addNewToDoInput}
            value={newTodo}
            aria-label="Add todo item"
            onChange={handleOnChange}
          />
          <button
            type="submit"
            className={[styles.addNewToDoBtn, styles.toDoListBtns].join(" ")}
          >
            Add new Todo
          </button>
        </div>
        <ToDoListItems
          styles={styles}
          todos={todos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
          onCancelEditingTodo={cancelEditingTodo}
          onSaveEditedTodo={saveEditedTodo}
          setEditText={setEditText}
          editText={editText}
          MAXLENGTHFORTEXTINPUT={MAXLENGTHFORTEXTINPUT}
        />
      </form>
    </main>
  );
}
