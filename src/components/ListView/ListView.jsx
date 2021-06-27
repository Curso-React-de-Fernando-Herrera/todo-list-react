import { useForm } from '../../hooks/useForm'

const ListView = () => {
  const initialState = {
    task: '',
    important: false
  }

  const { state, handleChange } = useForm( initialState )
  const { task, important } = state

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder='New note...'
          name='task'
          value={task}
          onChange={(e) => handleChange(e)}
        />

        <button
          name='important'
          value={important}
          onClick={ (e) => handleChange(e, important) }
        >⭐</button>
        
        <button>Guardar</button>

      </form>
  )
}

export default ListView
