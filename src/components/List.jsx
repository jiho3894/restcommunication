import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "../redux/modules/todo";
import Comment from "./Comment";

const List = () => {
  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  return (
    <ul>
      {isLoading
        ? "Loading..."
        : todos.postList?.map((todo) => {
            return (
              <Comment
                key={todo.id}
                id={todo.id}
                title={todo.title}
                nickname={todo.nickname}
              />
            );
          })}
    </ul>
  );
};

export default List;
