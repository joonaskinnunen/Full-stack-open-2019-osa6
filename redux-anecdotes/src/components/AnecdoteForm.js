import React from 'react'
import { newAnecdoteAction } from '../reducers/anecdoteReducer'
import { newNotificationAction } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const store = props.store

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        store.dispatch(newAnecdoteAction(content))
        store.dispatch(newNotificationAction(`you added anecdote '${content}'`))
        setTimeout(() => {
            store.dispatch(newNotificationAction(''))
        }, 5000)
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

export default AnecdoteForm