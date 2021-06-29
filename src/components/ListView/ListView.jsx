import uniqid from 'uniqid'
import AddTask from 'components/AddTask'
import ListTask from 'components/ListTask'
import { useEffect, useReducer } from 'react'
import taskReducer from './taskReducer'

const init = () => {
  return JSON.parse(window.localStorage.getItem('tasks')) || []
}

const ListView = () => {
  const [taskList, dispatch] = useReducer(taskReducer, [], init)

  useEffect(() => {
    window.localStorage.setItem( 'tasks', JSON.stringify( taskList ) )
  }, [taskList])

  const handleAddTask = (state) => dispatch({ type: 'add', payload: {
    ...state,
    id: uniqid(),
    isCompleted: false,
  }})

  const handleImportant = (id) => dispatch({ type: 'changeImportant', payload: id })

  const handleDelete = (id) => dispatch({ type: 'delete', payload: id })

  const handleComplete = (id) => dispatch({ type: 'complete', payload: id })

  return (
    <>
      <AddTask handleAddTask={handleAddTask} />

      <ListTask
        taskList={taskList}
        handleImportant={handleImportant}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default ListView
