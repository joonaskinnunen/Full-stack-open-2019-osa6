export const newFilterAction = (filter) => {
    return {
        type: 'NEWFILTER',
        filter
    }
}

const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'NEWFILTER':
            return action.filter
        default: return state
    }
}

export default filterReducer