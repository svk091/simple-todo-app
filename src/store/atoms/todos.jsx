import {atom} from 'recoil';

export const todosAtom = atom({
    key : 'todoAtom',
    default : [{
        id : 733574757,
        title : 'go to gym',
        description : 'hello'
    }]
}) 