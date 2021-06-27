import { useState } from "react"

export const useForm = ( stateToUse ) => {
  const [state, setState] = useState( stateToUse )

  const handleChange = (e, value = undefined) => {
    const { target } = e

    e.preventDefault()

    setState({
      ...state,
      [target.name]: (typeof value === 'undefined'
        ? target.value
        : !value
      )
    })
  
  }

  const reset = () => setState( stateToUse )

  return {
    state,
    handleChange,
    reset
  }
}
