import React from 'react'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    margin: 10,
    borderWidth: 1
  }

  const hiddenStyle = {
    display: 'none'
  }

  return (
    <div style={props.store.getState().notification === '' ? hiddenStyle : style}>
      {props.store.getState().notification}
    </div>
  )
}

export default Notification