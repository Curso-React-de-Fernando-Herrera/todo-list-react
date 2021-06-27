import { useState } from "react"

export const useForm = ( stateToUse ) => {
  const [state, setState] = useState( stateToUse )

  const handleChange = ({ target }, value = undefined) => {

    setState({
      ...state,
      [target.name]: (typeof value === 'undefined'
        ? target.value
        : !value
      )
    })
    
  }

  return {
    state,
    handleChange,
  }
}
