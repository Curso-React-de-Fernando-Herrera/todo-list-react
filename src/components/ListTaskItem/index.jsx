import React from 'react'

import {
  ImportantInput,
  ImportantIcon,
  BoxTask
} from './styles'

const ListTaskItem = ({ taskprops, handleImportant, handleComplete, handleDelete }) => {

  const { id, task, isCompleted, important } = taskprops

  return (
    <BoxTask key={id}>

      <ImportantInput
        type="checkbox"
        defaultChecked={important}
        onClick={() => handleImportant(id)}
        id={id}
      />
      <ImportantIcon htmlFor={id} />

      <p style={isCompleted ? {textDecoration: 'line-through'} : null}>{task}</p>
      
      <button onClick={() => handleComplete(id)}>Hecho</button>
      <button onClick={() => handleDelete(id)}>Borrar</button>
    
  </BoxTask>
  )
}

export default ListTaskItem
