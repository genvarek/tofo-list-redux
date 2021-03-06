const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text
          }
        ]
      case 'DELETE_TODO':
        return state.filter(todo => todo.id !== action.id)
  
      case 'FETCHED_TODOS':
        // console.log(typeof(action.todos))
        // console.log(action.todos)
        return state.concat(action.fetchedData)
  
      default:
        return state
    }
  }
  
  export default todos