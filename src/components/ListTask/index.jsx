import React from 'react'
import PropTypes from 'prop-types'

const ListTask = ({ taskList, handleImportant, handleComplete, handleDelete }) => {
  return (
    <section>
    {

      taskList.map(({ task, important, id, isCompleted }) => 

        <article key={id}>

          <p style={isCompleted ? {textDecoration: 'line-through'} : null}>{task}</p>

          <button onClick={() => handleImportant(id)}>{important ? 'imp' : 'not imp'}</button>
          <button onClick={() => handleComplete(id)}>Hecho</button>
          <button onClick={() => handleDelete(id)}>Borrar</button>
          
        </article>

      )

    }
  </section>
  )
}

ListTask.propTypes = {
  taskList: PropTypes.array.isRequired,
  handleImportant: PropTypes.func.isRequired,
  handleComplete: PropTypes.isRequired,
  handleDelete: PropTypes.isRequired
}

export default ListTask
