import React from 'react'
import { voteAction } from '../reducers/anecdoteReducer'
import { newNotificationAction } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const store = props.store
    const anecdotes = store.getState().data.sort((a, b) => { return b.votes - a.votes })
    const filter = store.getState().filter
    const vote = (anecdote) => {
        store.dispatch(voteAction(anecdote.id))
        store.dispatch(newNotificationAction(`you voted '${anecdote.content}'`))
        setTimeout(() => {
            store.dispatch(newNotificationAction(''))
        }, 5000)
    }
    return (
        <div>
            {anecdotes.map((x, i) => x.content.toLowerCase().includes(filter.toLowerCase()) && (<div key={x.id}><div>{x.content}</div><div> has {x.votes}<button onClick={() => vote(x)}>vote</button></div></div>))}
        </div>
    )
}

export default AnecdoteList
