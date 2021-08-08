import { useState, useEffect} from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (text.length > 2) {
      addTodo(text.trim());
      setText("");
    }
  };

 
  return (
    <form onSubmit={submitHandler}>
      <input
        value={text}
        type="text"
        placeholder="Enter your todo here..."
        onChange={(e) => setText(e.target.value)}
      />
      <button>
        <i className="fa fa-plus"></i>
      </button>
    </form>
  );
};

export default TodoForm;
