import React from 'react';
import {
  voteAction, newAnecdoteAction
} from './reducers/anecdoteReducer'

const App = (props) => {
  const store = props.store
  const anecdotes = store.getState().sort((a, b) => { return b.votes - a.votes })
  
  const vote = (id) => {
    store.dispatch(voteAction(id))
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    store.dispatch(newAnecdoteAction(content))
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App