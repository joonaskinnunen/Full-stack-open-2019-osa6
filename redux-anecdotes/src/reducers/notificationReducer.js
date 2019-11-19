export const newNotificationAction = (notification) => {
    return {
        type: 'NEWNOTIFICATION',
        notification
    }
}

const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'NEWNOTIFICATION':
            return action.notification
        default: return state
    }
}

export default notificationReducer