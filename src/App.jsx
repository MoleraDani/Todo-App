import './App.css'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { Container, Typography } from '@mui/material'
import { useLocalStorage } from './hooks/useLocalStorage'
import { RemoveTodos } from './components/RemoveTodos'

function App () {
  const [todos, setTodos] = useLocalStorage('todos', [])

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: window.crypto.randomUUID(), text: todo, completed: false }
    ])
  }

  const removeTodo = (todoToRemove) => {
    setTodos(todos.filter((todo) => todo.id !== todoToRemove.id))
  }

  const toggleCompleted = (todoToToggle) => {
    setTodos(
      todos.map((todo) =>
        todo.text === todoToToggle.text
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  const removeToDos = () => {
    setTodos([])
  }

  const countCompletedTodos = () => {
    return todos.filter((todo) => todo.completed).length
  }

  const editTodo = (todoToEdit, newValue) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoToEdit.id ? { ...todo, text: newValue } : todo
      )
    )
  }

  return (
    <Container maxWidth='md'>
      <Typography variant='h4' align='center' gutterBottom>
        Lista de tareas
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
        removeToDos={removeToDos}
        countCompletedTodos={countCompletedTodos}
        editTodo={editTodo}
      />
      <RemoveTodos
        removeToDos={removeToDos}
        countCompletedTodos={countCompletedTodos}
      />
    </Container>
  )
}

export default App
