export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const incrementBy = (value) => {
    return {
        type: 'INCREMENT_BY',
        payload: value
    }
}
