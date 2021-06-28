import { useForm } from '../../hooks/useForm'
import uniqid from 'uniqid'
import { useReducerHook } from '../../hooks/useReducer'

const ListView = () => {
  const { state, handleChange, reset } = useForm({ task: '', important: false })
  const { task, important } = state

  const { taskList, dispatch } = useReducerHook()

  const handleAdd = (e) => {
    e.preventDefault()
    dispatch({ type: 'add', payload: { ...state, id: uniqid(), isCompleted: false }})
    reset()
  }

  const handleImportant = (id) => dispatch({ type: 'changeImportant', payload: id })

  const handleDelete = (id) => dispatch({ type: 'delete', payload: id })

  const handleComplete = (id) => dispatch({ type: 'complete', payload: id })

  return (
    <>
      <form onSubmit={handleAdd}>

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
    </>
  )
}

export default ListView
