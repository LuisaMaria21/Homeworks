import { useState } from "react";

function NumberList() {
    const [numbers, setNumbers] = useState([]);
    const [newNumber, setNewNumber] = useState('');

    const handleNewNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const handleAddNumber = () => {
        const newNumbers = [...numbers, Number(newNumber)];
        setNumbers(newNumbers.sort((a, b) => a - b));
        setNewNumber('');
    };


    return (
        <div>
            <h2>Agregar números:</h2>
            <label>
                Nuevo número:
                <input type="number" value={newNumber} onChange={handleNewNumberChange} />
            </label>
            <button className="button" onClick={handleAddNumber}>Agregar</button>
            <h2>Números ordenados de menor a mayor:</h2>
            <ol>
                {numbers.map((number) => (
                    <li key={number}>{number}</li>
                ))}
            </ol>
        </div>
    );
}


export default NumberList;
