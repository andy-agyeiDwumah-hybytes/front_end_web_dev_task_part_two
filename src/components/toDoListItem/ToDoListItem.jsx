export default function ToDoListItem({
  id,
  title,
  completed,
  editing,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
  onCancelEditingTodo,
  onSaveEditedTodo,
  setEditText,
  editText,
  styles,
  MAXLENGTHFORTEXTINPUT,
}) {
  // If editing is true for a todo item, show an input box. Else, show the item as a checkbox
  return editing ? (
    <li>
      <input
        type="text"
        onChange={e => setEditText(e.target.value)}
        id={id}
        name={id}
        maxLength={MAXLENGTHFORTEXTINPUT}
        value={editText}
        aria-label={title}
        className={styles.toDoListEditTextInput}
      />
      <button
        type="button"
        className={[
          styles.toDoListBtns,
          styles.toDoListSecondaryBtns,
          styles.saveBtn,
        ].join(" ")}
        onClick={() => onSaveEditedTodo(id, editText)}
      >
        Save
      </button>
      <button
        type="button"
        className={[
          styles.toDoListBtns,
          styles.toDoListSecondaryBtns,
          styles.cancelBtn,
        ].join(" ")}
        onClick={() => onCancelEditingTodo(id)}
      >
        Cancel
      </button>
    </li>
  ) : (
    <li key={id}>
      <label
        htmlFor={id}
        className={
          completed
            ? [
                styles.toDoListInputLabelCompleted,
                styles.toDoListInputLabel,
              ].join(" ")
            : styles.toDoListInputLabel
        }
      >
        {title}
      </label>
      <input
        type="checkbox"
        checked={completed}
        className={styles.toDoListCheckbox}
        onChange={(e) => onToggleTodo(id, e.target.checked)}
        id={id}
        name={id}
      />
      <button
        type="button"
        className={[
          styles.toDoListBtns,
          styles.toDoListSecondaryBtns,
          styles.editBtn,
        ].join(" ")}
        onClick={() => onEditTodo(id)}
      >
        Edit
      </button>
      <button
        type="button"
        className={[
          styles.toDoListBtns,
          styles.toDoListSecondaryBtns,
          styles.deleteBtn,
        ].join(" ")}
        onClick={() => onDeleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}
