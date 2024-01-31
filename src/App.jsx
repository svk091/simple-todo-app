/* 
2 input boxes (title, description) => atom
button
todos => atom 
filter (gym) => atom
selector (the current set of todos
*/

import { RecoilRoot } from 'recoil';


import { CreateTodo } from './components/CreateTodo';
import { FilteredTodos } from './components/FilteredTodos';
export default function App() {
  return (
    <RecoilRoot>
      <CreateTodo />
      <FilteredTodos />
    </RecoilRoot>
  )
}
