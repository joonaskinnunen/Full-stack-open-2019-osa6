const notificationReducer = (state = "message", action) => {
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