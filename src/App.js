import { useState, useEffect } from "react";
import "./style.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Context } from './context';

const initialValues = [
  // { id: 1, title: "Learn JS", done: false, dateDone: null },
  // { id: 2, title: "Learn React", done: false, dateDone: null },
  // { id: 3, title: "Make Todo", done: false, dateDone: null },
  // { id: 4, title: "Congratulations", done: false, dateDone: null }
];

export default function App() {
  const [todos, setTodos] = useState(initialValues);

  useEffect(() => {
    const raw = localStorage.getItem('todos') || [];
    setTodos(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log(1)
  },[todos]); 

  const addTodo = (text) => {
    const todo = { id: Date.now(), title: text, done: false, dateDone: null };
    setTodos([...todos, todo]);
    console.log(text);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const doneTodo = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.done = !item.done;
          item.dateDone = Date.now();
        }
        return item;
      })
    );
  };

  return (
    <Context.Provider value={{
      removeTodo, doneTodo
    }}>
      <div className="App">
        <div className="header">Todo:</div>

        <div className="wrapper">
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </div>
      </div>
    </Context.Provider>
  );
}
