import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, doneTodo }) => {
  return (
    <div className="list">
      {todos.length ? (
        todos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            removeTodo={removeTodo}
            doneTodo={doneTodo}
          />
        ))
      ) : (
        <div className="empty">No todos</div>
      )}
    </div>
  );
};

export default TodoList;
