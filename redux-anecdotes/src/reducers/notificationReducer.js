export const newNotification = (message, time) => {
    return async dispatch => {
        dispatch({
            type: 'NEWNOTIFICATION',
            message
        })
        setTimeout(() => {
            dispatch({
                type: 'NEWNOTIFICATION',
                message: ''
            })
        }, time)
    }
}

const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'NEWNOTIFICATION':
            return action.message
        default: return state
    }
}

export default notificationReducer