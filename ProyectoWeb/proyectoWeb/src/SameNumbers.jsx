import { useState } from "react"

function SameNumbers() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');

    const handleNum1Change = (event) => {
        setNum1(event.target.value);
    };

    const handleNum2Change = (event) => {
        setNum2(event.target.value);
    };

    const handleNum3Change = (event) => {
        setNum3(event.target.value);
    };

    const countSameNumbers = () => {
        let count = 0;
        if (num1 === num2) {
            count++;
        }
        if (num1 === num3) {
            count++;
        }
        if (num2 === num3) {
            count++;
        }
        return count;
    };

    return (
        <div>
            <label>
                Número 1:
                <input type="number" value={num1} onChange={handleNum1Change} />
            </label>
            <label>
                Número 2:
                <input type="number" value={num2} onChange={handleNum2Change} />
            </label>
            <label>
                Número 3:
                <input type="number" value={num3} onChange={handleNum3Change} />
            </label>
            <p>{countSameNumbers()} número(s) son iguales.</p>
        </div>
    );
}

export default SameNumbers;
