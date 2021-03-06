import React from 'react'
import { newAnecdoteAction } from '../reducers/anecdoteReducer'
import { newNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.newAnecdoteAction(content)
        props.newNotification(`you added anecdote '${content}'`, 5000)
    }
    const style = {
        margin: 10
    }
    return (
        <div style={style}>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdote' /></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    newAnecdoteAction,
    newNotification
}

const connectedAnecdoteForm = connect(
    null,
    mapDispatchToProps
)(AnecdoteForm)

export default connectedAnecdoteForm