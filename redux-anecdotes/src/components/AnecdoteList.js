import React from 'react'
import { voteAction } from '../reducers/anecdoteReducer'
import { newNotificationAction } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
    const anecdotes = props.anecdotes.sort((a, b) => { return b.votes - a.votes })
    const filter = props.filter
    const vote = (anecdote) => {
        props.voteAction(anecdote.id)
        props.newNotificationAction(`you voted '${anecdote.content}'`)
        setTimeout(() => {
            props.newNotificationAction('')
        }, 5000)
    }
    return (
        <div>
            {anecdotes.map(x => x.content.toLowerCase().includes(filter.toLowerCase()) && (<div key={x.id}><div>{x.content}</div><div> has {x.votes}<button onClick={() => vote(x)}>vote</button></div></div>))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.data,
        filter: state.filter
    }
}

const mapDispatchToProps = {
    newNotificationAction,
    voteAction
}

const connectedAnecdoteList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)

export default connectedAnecdoteList
