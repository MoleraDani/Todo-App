import { ListItem, ListItemText, IconButton, ListItemSecondaryAction, Checkbox, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useState } from 'react'

export function TodoItem ({ todo, removeTodo, toggleCompleted, editTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.text)

  const handleEdit = (e) => {
    e.preventDefault()
    console.log('hola')
    if (editValue.trim()) {
      // Llama a la función de edición en el componente padre
      editTodo(todo, editValue)
      setIsEditing(false)
    }
  }

  return (
    <ListItem className='todo-item' style={{ paddingLeft: '0.4rem' }}>
      <Checkbox checked={todo.completed} onClick={() => toggleCompleted(todo)} />
      {isEditing
        ? (
          <form onSubmit={handleEdit}>
            <TextField
              className='edit-textfield'
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          </form>
          )
        : (
          <ListItemText
            primary={todo.text}
            style={todo.completed ? { textDecoration: 'line-through' } : null}
            onClick={() => toggleCompleted(todo)}
          />
          )}
      <ListItemSecondaryAction>
        <IconButton
          edge='end'
          aria-label='edit button'
          onClick={() => setIsEditing(!isEditing)}
        >
          <EditIcon />
        </IconButton>

        <IconButton edge='end' aria-label='delete button' onClick={() => removeTodo(todo)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
