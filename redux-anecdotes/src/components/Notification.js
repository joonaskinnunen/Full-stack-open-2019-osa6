import React from 'react'
import { connect } from 'react-redux'

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
    <div style={props.notification === '' ? hiddenStyle : style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const connectedNotification = connect(mapStateToProps)(Notification)

export default connectedNotification