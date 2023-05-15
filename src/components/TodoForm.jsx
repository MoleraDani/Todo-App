import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export function TodoForm ({ addTodo }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      addTodo(inputValue)
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='form-row'>
      <TextField
        label='Agregar tarea'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className='form-input'
        sx={{
          '& label': {
            color: '#ffffff'
          },
          '& label.Mui-focused': {
            color: '#ffffff'
          },
          '& .MuiInputBase-input': {
            color: '#ffffff'
          },
          '& fieldset': {
            borderColor: '#1976d2'
          }
        }}
      />
      <Button type='submit' variant='contained' color='primary' className='form-button'>
        <AddIcon />
      </Button>
    </form>
  )
}
