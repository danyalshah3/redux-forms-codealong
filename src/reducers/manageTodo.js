export default function manageTodo(state = {
  todos: [],
}, action) {

  switch(action.type) {
   case "ADD_TODO":

   return [...state.todos, action.payload.text]


    
    // console.log("reducer received this action:", action);
    default:
    return state;
  }
}
