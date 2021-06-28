import { useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import uniqid from 'uniqid'

const ListView = () => {

  const { state, handleChange, reset } = useForm({ task: '', important: false })
  const { task, important } = state

  const taskReducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return [
          ...state,
          action.payload
        ]

      case 'changeImportant':
        return state.map( task => task.id === action.payload
          ? { ...task, important: !task.important}
          : task
        )
      
      case 'delete':
        return state.filter(task => task.id !== action.payload)

      case 'complete':
          return state.map( task => task.id === action.payload
            ? { ...task, isCompleted: !task.isCompleted }  
            : state
          )
    
      default:
        return state
    }
  } 

  const [taskList, dispatch] = useReducer(taskReducer, [])

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
      <form>

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
        
        <button onClick={handleAdd}>Guardar</button>

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
