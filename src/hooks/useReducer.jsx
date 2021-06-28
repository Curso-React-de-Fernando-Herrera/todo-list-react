import { useReducer } from "react"

export const useReducerHook = () => {
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
            : task
          )
    
      default:
        return state
    }
  }

  const [taskList, dispatch] = useReducer(taskReducer, [])

  return {
    dispatch,
    taskList
  }
}
