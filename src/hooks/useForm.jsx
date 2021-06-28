import { useState } from "react"

export const useForm = ( stateToUse ) => {
  const [state, setState] = useState( stateToUse )

  const handleChange = (e) => {
    const { target } = e

    setState({
      ...state,
      [target.name]: target.value
    })
  
  }

  const handleBoolean = (e, value) => {
    const { target } = e
    e.preventDefault()

    setState({
      ...state,
      [target.name]: !value
    })
  }

  const reset = () => setState( stateToUse )

  return {
    state,
    handleChange,
    handleBoolean,
    reset
  }
}
