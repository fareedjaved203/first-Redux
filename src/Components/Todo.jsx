import React from "react";
import { useState } from "react";
import { Add, Remove, RemoveAll } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
  const [item, setItems] = useState("");
  const list = useSelector((state) => {
    //u can see this in Redux dev tools in chart state->TodoReducer->list
    return state.TodoReducer.list;
  });
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter something"
          value={item}
          onChange={(event) => setItems(event.target.value)}
        />
        <button
          onClick={() => {
            dispatch(Add(item), setItems(""));
          }}
        >
          Add
        </button>
      </div>
      <div>
        {list.map((elem) => {
          return (
            <div key={elem.id}>
              <div>{elem.data}</div>
              <button
                onClick={() => {
                  dispatch(Remove(elem.id));
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>

      <button onClick={() => dispatch(RemoveAll())}>Remove All</button>
    </>
  );
};

export default Todo;
