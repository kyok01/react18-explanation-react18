import axios from "axios";
import { useQuery } from "react-query";

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchTodos = async () => {
    const result = await axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return result.data;
  };


export const TodoList = () => {
  const { data } = useQuery<Todo[]>(["todos"], fetchTodos);

  return (
    <div style={{height: '300px', border: '2px solid gray', background: 'mistyrose', overflow: 'scroll'}}>
        
    <h2>TodoList</h2>
    {data?.map((todo) => <p key={todo.id}>{todo.title}</p>)}
    </div>

  )
}
