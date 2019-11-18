import React from 'react'
import {newFilterAction} from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
      console.log(event.target.value)
    props.store.dispatch(newFilterAction(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter