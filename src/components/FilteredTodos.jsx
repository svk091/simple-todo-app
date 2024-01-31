import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterAtom } from "../store/atoms/filterAtom";
import { filterSelector } from "../store/selectors/filterSelector";

export function FilteredTodos() {
    const setFilter = useSetRecoilState(filterAtom);
    const filteredTodos = useRecoilValue(filterSelector);
    return (
        <div>
            <input style={{margin : '20px', padding : '10px', border: '2px solid green'}} type="text" placeholder="Search" onChange={(event) => {
                setFilter(event.target.value);
            }} />
            {
                filteredTodos.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <h2>{todo.title}</h2>
                            <h4>{todo.description}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}