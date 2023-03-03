import React, { useState } from 'react';

function Greeting() {
    const [name, setName] = useState('');
    const [time, setTime] = useState('');

    const getGreeting = (time) => {
        const hour = parseInt(time.split(':')[0]);
        if (hour >= 6 && hour < 12) {
            return `Buenos días, ${name}`;
        } else if (hour >= 12 && hour < 19) {
            return `Buenas tardes, ${name}`;
        } else {
            return `Buenas noches, ${name}`;
        }
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <div>
            <label>
                Ingresa tu nombre:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
                Ingresa la hora (formato hh:mm):
                <input type="text" value={time} onChange={handleTimeChange} />
            </label>
            {name && time && <p>{getGreeting(time)}</p>}
        </div>
    );
}

export default Greeting;
