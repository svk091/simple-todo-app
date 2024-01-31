import { selector } from "recoil";
import { todosAtom } from "../atoms/todos";
import { filterAtom } from "../atoms/filterAtom";

export const filterSelector = selector({
    key : 'filterSelector',
    get : ({get}) => {
        const todos = get(todosAtom);
        const filter = get(filterAtom);
        const filterdTodos = todos.filter((todo) => {
            const title = todo.title.toLowerCase();
            const des = todo.description.toLowerCase();
            return title.includes(filter) || des.includes(filter)
        })
        return filterdTodos
    }
 }) 