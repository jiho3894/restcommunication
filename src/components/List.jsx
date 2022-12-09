import { useEffect, useState } from "react";
import { getTodo } from "../core/api/list/queries";
import Comment from "./Comment";

const List = () => {
  const [list, setList] = useState();
  useEffect(() => {
    getTodo().then((res) => setList(res));
  }, []);
  return (
    <ul>
      {list === undefined
        ? "Loading..."
        : list.postList.map((todo) => {
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
