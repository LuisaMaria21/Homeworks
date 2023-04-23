const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'INCREMENT_BY':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        default:
            return state
    }
}

export default counterReducer