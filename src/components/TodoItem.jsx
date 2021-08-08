import { useContext } from "react";
import { Context } from "../context";

import Moment from "react-moment";

const TodoItem = ({ item }) => {
  const { removeTodo, doneTodo } = useContext(Context);
  return (
    <div className="item">
      <i
        className={
          "fad " + (item.done ? "fa-check-square done" : "fa-square notdone")
        }
        onClick={() => doneTodo(item.id)}
      />

      <p className={item.done ? "done" : null}>{item.title}</p>

      {item.dateDone && item.done && (
        <span>
          <Moment format="HH:mm:ss">{item.dateDone}</Moment>
        </span>
      )}

      <button onClick={() => removeTodo(item.id)}>
        <i className="far fa-trash" />
      </button>
    </div>
  );
};

export default TodoItem;
