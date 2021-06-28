import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'hooks/useForm'


const AddTask = ({ handleAddTask }) => {
  const { state, handleChange, handleBoolean, reset } = useForm({ task: '', important: false })
  const { task, important } = state

  const handleAdd = (e) => {
    e.preventDefault()
    reset()
    handleAddTask(state)
  }

  return (
    <form onSubmit={handleAdd}>

    <input
      type="text"
      placeholder='New note...'
      name='task'
      autoComplete='off'
      value={task}
      onChange={handleChange}
    />

    <button
      type='button'
      name='important'
      value={important}
      onClick={ (e) => handleBoolean(e, important) }
    >⭐</button>
    
    <button type='submit'>Guardar</button>

  </form>
  )
}

AddTask.propTypes = {
  handleAddTask: PropTypes.func.isRequired
}

export default AddTask
