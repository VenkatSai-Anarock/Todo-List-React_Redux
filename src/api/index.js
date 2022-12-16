import { v4 } from "node-uuid";

const fakeDatabase = {
    todos:[
        {
            id: v4(),
            text: "Hello",
            completed: true
        },
        {
            id: v4(),
            text: "Hello2",
            completed: false
        },
        {
            id: v4(),
            text: "Hello3",
            completed: true
        },
        {
            id: v4(),
            text: "Hello4",
            completed: false
        }

    ]
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve,ms));

export const fetchTodos = (filter) =>{
    
    return delay(500).then(()=>{
        switch(filter){
            case 'all':
                return fakeDatabase.todos
            case 'active':
                return fakeDatabase.todos.filter(t => !t.completed);
            case 'completed':
                return fakeDatabase.todos.filter(t => t.completed);
            default:
                throw new Error(`Unknown Filter:  ${filter}`)
        }
    })
}