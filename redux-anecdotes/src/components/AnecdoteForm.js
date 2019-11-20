import React from 'react'
import { newAnecdoteAction, createAnecdote } from '../reducers/anecdoteReducer'
import { newNotificationAction } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        props.newAnecdoteAction(newAnecdote)
        props.newNotificationAction(`you added anecdote '${content}'`)
        setTimeout(() => {
            props.newNotificationAction('')
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

const mapDispatchToProps = {
    newAnecdoteAction,
    newNotificationAction,
    createAnecdote
}

const connectedAnecdoteForm = connect(
    null,
    mapDispatchToProps
)(AnecdoteForm)

export default connectedAnecdoteForm