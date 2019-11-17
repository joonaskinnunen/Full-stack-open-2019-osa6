import React from 'react'
import { voteAction } from '../reducers/anecdoteReducer'
import { newNotificationAction } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const store = props.store
    const anecdotes = store.getState().data.sort((a, b) => { return b.votes - a.votes })
    const vote = (anecdote) => {
        store.dispatch(voteAction(anecdote.id))
        store.dispatch(newNotificationAction(`you voted '${anecdote.content}'`))
        setTimeout(() => {
            store.dispatch(newNotificationAction(''))
        }, 5000)


    }
    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList
