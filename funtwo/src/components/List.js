import { useReducer, useState } from "react";

import Form from "../components/Form";

import "./styles/List.css";

import ListItem from "../components/ListItem";
const List = () => {
      const removeTask = (id) => {
            dispatchListState({
                  type: "DISMISS",
                  id,
            });
      };
      const [taskCounter, setTaskCounter] = useState(0);
      const reducerFunction = (state, action) => {
            switch (action.type) {
                  case "ADD":
                        setTaskCounter((prev) => prev + 1);
                        return [
                              ...state,
                              <ListItem
                                    title={action.text}
                                    content={action.content}
                                    finishDate={action.finishDate}
                                    id={taskCounter}
                                    removeMethod={removeTask}
                              />,
                        ];
                  case "DISMISS":
                        const newState = state.filter(
                              (item) => item.props.id !== action.id
                        );

                        return newState;
                  default:
                        console.log("unknown operation");
            }
      };
      const [listState, dispatchListState] = useReducer(reducerFunction, []);

      return (
            <>
                  <Form submit={dispatchListState} />
                  <ul className="todoList">{listState}</ul>
            </>
      );
};
export default List;
