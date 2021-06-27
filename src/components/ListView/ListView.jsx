import { useState } from 'react'
import { useForm } from '../../hooks/useForm'

const ListView = () => {
  const initialState = {
    task: '',
    important: false
  }

  const { state, handleChange, reset } = useForm( initialState )
  const { task, important } = state

  const [listTask, setListTask] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    setListTask( list => list.concat(state))
    reset()
  }

  return (
    <>
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

      <section>
        {
          listTask.map( ({ task, important }) => 
            <article>
              <p>{task}</p>
              <button>{important ? '⭐' : '😔'}</button>
            </article>
          )
        }
      </section>
    </>
  )
}

export default ListView
