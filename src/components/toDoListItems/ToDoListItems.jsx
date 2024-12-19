// Components
import ToDoListItem from "../toDoListItem/ToDoListItem";

export default function ToDoListItems({
  styles,
  todos,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
  onCancelEditingTodo,
  onSaveEditedTodo,
  setEditText,
  editText,
  MAXLENGTHFORTEXTINPUT
}) {
  let numOfTodosToBeCompleted = 0;
  if (!todos) return numOfTodosToBeCompleted;
  todos.map(item=> {
    if (!item.completed) {
      numOfTodosToBeCompleted++;
    }
    return numOfTodosToBeCompleted;
  });
  return (
    <>
      {/* No todos */}
      {todos.length === 0 && (
        <p className={styles.numOfTodosLeftText}>
          <strong>Hooray! No todos</strong>
        </p>
      )}
      {/* Number of tasks to do */}
      {numOfTodosToBeCompleted > 0 && todos.length > 0 && (
        <p className={styles.numOfTodosLeftText}>
          <strong>To do: {numOfTodosToBeCompleted}</strong>
        </p>
      )}
      {/* All tasks complete */}
      {numOfTodosToBeCompleted === 0 && todos.length > 0 && (
        <p className={styles.numOfTodosLeftText}>
          <strong>All complete</strong>
        </p>
      )}
      <div>
        <ul className={styles.toDoListUl}>
          {todos &&
            todos.map(item => {
              return (
                <ToDoListItem
                  key={item.id}
                  // pass all properties of item
                  {...item}
                  onToggleTodo={onToggleTodo}
                  onDeleteTodo={onDeleteTodo}
                  onEditTodo={onEditTodo}
                  onCancelEditingTodo={onCancelEditingTodo}
                  onSaveEditedTodo={onSaveEditedTodo}
                  setEditText={setEditText}
                  editText={editText}
                  styles={styles}
                  MAXLENGTHFORTEXTINPUT={MAXLENGTHFORTEXTINPUT}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
}
