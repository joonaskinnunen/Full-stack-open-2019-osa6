import anecdoteService from '../services/anecdotes'

export const voteAction = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const newAnecdoteAction = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    console.log(newAnecdote)
    dispatch({
      type: 'NEW',
      data: newAnecdote
    })
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