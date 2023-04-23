import { useSelector, useDispatch } from 'react-redux'
import { decrement, incrementBy } from './actions'

function Counter() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handleIncrementBy = (value) => {
        dispatch(incrementBy(value))
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={() => handleIncrementBy(5)}>Increment by 5</button>
        </div>
    )
}

export default Counter
