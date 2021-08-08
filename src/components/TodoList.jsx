import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div className="list">
      {todos.length ? (
        todos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
          />
        ))
      ) : (
        <div className="empty">No todos</div>
      )}
    </div>
  );
};

export default TodoList;
