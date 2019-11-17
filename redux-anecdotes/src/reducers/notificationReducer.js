export const newNotificationAction = (notification) => {
    return {
        type: 'NEWNOTIFICATION',
        notification
    }
}

const notificationReducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('ACTION: ', action)
    switch(action.type) {
        case 'NEWNOTIFICATION':
            console.log(action)
            return action.notification
        default: return state
    }
}

export default notificationReducer