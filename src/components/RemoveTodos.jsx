import { ListItem, ListItemText, ListItemSecondaryAction, List, Button } from '@mui/material'

export function RemoveTodos ({ removeToDos, countCompletedTodos }) {
  return (
    <List>
      <ListItem>
        <ListItemText primary={`Tareas completadas: ${countCompletedTodos()}`} onClick={() => removeToDos()} className='list-item-text' />
        <ListItemSecondaryAction className='list-item-secondary-action'>
          <Button primary='Borrar todas' variant='contained' color='primary' onClick={() => removeToDos()} sx={{ textTransform: 'none' }}>
            Borrar todas
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  )
}
