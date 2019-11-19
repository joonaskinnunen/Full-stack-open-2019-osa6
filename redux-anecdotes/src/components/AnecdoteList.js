import React from 'react'
import { voteAction } from '../reducers/anecdoteReducer'
import { newNotificationAction } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
    const vote = (anecdote) => {
        props.voteAction(anecdote.id)
        props.newNotificationAction(`you voted '${anecdote.content}'`)
        setTimeout(() => {
            props.newNotificationAction('')
        }, 5000)
    }
    return (
        <div>
            {props.visibleAnecdotes.map(anecdote => <div key={anecdote.id}><div>{anecdote.content}</div><div> has {anecdote.votes}<button onClick={() => vote(anecdote)}>vote</button></div></div>)}
        </div>
    )
}

const anecdotesToShow = ({ data, filter }) => {
    return data.sort((a, b) => b.votes - a.votes).filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
}

const mapStateToProps = (state) => {
    return {
        visibleAnecdotes: anecdotesToShow(state)
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
