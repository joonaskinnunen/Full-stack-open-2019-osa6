export const newFilterAction = (filter) => {
    return {
        type: 'NEWFILTER',
        filter
    }
}

const filterReducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch(action.type) {
        case 'NEWFILTER':
            return action.filter
        default: return state
    }
}

export default filterReducer