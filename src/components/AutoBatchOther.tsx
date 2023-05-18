import { useState } from "react"
import { flushSync } from "react-dom";

type Todo = {
    userId: number;
    id: number;
    title: number;
    completed: boolean;
}

export const AutoBatchOther = ()=> {
    console.log('AutoBatchOther');
    
    const [todos, setTodos] = useState<Todo[] | null>(null);
    const [isFinishApi, setIsFinishApi] = useState<boolean>(false);
    const [state3, setState3] = useState<string>('');

    const onClickExecuteApi = () => {
        fetch(('https://jsonplaceholder.typicode.com/todos'))
        .then((res) => res.json())
        .then((data)=> {
            setTodos(data);
            setIsFinishApi(true);
            setState3('updated')
        })
        }
    return (
        <div>
            <p>AutoMatic Batching確認用（その他）</p>
            <button onClick={onClickExecuteApi}>API実行</button>
            <p>isFinishApi: {isFinishApi ? 'true' : 'false'}</p>
            {todos?.map((todo)=> <p key={todo.id}>{todo.title}</p>)}
        </div>
    )
}