import axios from 'axios'

export function fetchTodos() {
  return function(dispatch) {
    axios.get('http://localhost:3001/spisok')
      .then((response) => {
        const fetchedData = response.data
        dispatch({type: 'FETCHED_TODOS', fetchedData})
      })
  }
}

export function deleteTodo(id) {
  return function(dispatch) {
    axios.delete('http://localhost:3001/spisok/'+id)
      .then(dispatch({type: 'DELETE_TODO', id}))
  }
}

export function addTodo(text) {
  return function(dispatch) {
    const id = Date.now();
    axios({
      method: 'POST',
      url: 'http://localhost:3001/spisok/',
      data: {
        id: id,
        text: text
      }
    }).then(dispatch({type: 'ADD_TODO', id: id, text}))
  }
}