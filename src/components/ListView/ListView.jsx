import uniqid from 'uniqid'
import { useReducerHook } from 'hooks/useReducer'
import AddTask from 'components/AddTask'
import ListTask from 'components/ListTask'

const ListView = () => {
  const { taskList, dispatch } = useReducerHook()

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
