import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import VisibleTodoList from '../containers/VisibleTodoList'
import GetTodos from '../containers/GetTodos'
import Title from './Title'

const App = () => (
  <div id="box">
    <Title />
    <AddTodoContainer />
    <GetTodos />
    <VisibleTodoList />
  </div>
)

export default App