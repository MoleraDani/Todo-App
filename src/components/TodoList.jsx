import { List } from '@mui/material'
import { TodoItem } from './TodoItem'

export function TodoList ({ todos, removeTodo, toggleCompleted, editTodo }) {
  return (
    <List className='todo-list'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleCompleted={toggleCompleted} editTodo={editTodo} />
      ))}

    </List>
  )
}
