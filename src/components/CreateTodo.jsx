import { useRecoilValue, useRecoilState } from "recoil"
import { titleAtom } from "../store/atoms/title";
import { descriptionAtom } from "../store/atoms/description";
import { todosAtom } from "../store/atoms/todos";
import { useEffect, useState } from "react";

export function CreateTodo() {
    // const [title, setTitle] = useRecoilState(titleAtom);
    // const [description, setDescription] = useRecoilState(descriptionAtom);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todos, setTodos] = useRecoilState(todosAtom);
    return (
        <div style={{margin : '20px', padding : '10px', border: '2px solid black'}}>
            <input type="text" onChange={(event) => {
                setTitle(event.target.value);
            }} />
            <input type="text" onChange={(event) => {
                setDescription(event.target.value);
            }} /> 
            <button onClick={() => {
                const id = parseInt(Math.random() * 10000000)
                const todo = {
                    id : id,
                    title :title,
                    description : description
                }
                const newTodos = [...todos, todo];
                setTodos(newTodos);
            }}>Add todo</button>
        </div>
    )
}