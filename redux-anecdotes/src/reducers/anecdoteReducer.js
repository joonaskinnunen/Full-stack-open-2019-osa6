const getId = () => (100000 * Math.random()).toFixed(0)

export const voteAction = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const newAnecdoteAction = (content) => {
  return {
    type: 'NEW',
    data: {
      content: content,
      id: getId(),
      votes: 0
    }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
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