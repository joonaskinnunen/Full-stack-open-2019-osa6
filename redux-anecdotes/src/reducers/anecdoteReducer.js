export const voteAction = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const newAnecdoteAction = (anecdote) => {
  return {
    type: 'NEW',
    data: {
      content: anecdote.content,
      id: anecdote.id,
      votes: anecdote.votes
    }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export const createAnecdote = (data) => {
  return {
    type: 'NEW',
    data
  }
}

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      let newState = [...state]
      const indexOfObjectToVote = newState.findIndex(x => x.id === action.data.id)
      newState[indexOfObjectToVote] = { ...newState[indexOfObjectToVote], votes: newState[indexOfObjectToVote].votes + 1 }
      return newState
    case 'NEW':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default: return state
  }
}

export default anecdoteReducer