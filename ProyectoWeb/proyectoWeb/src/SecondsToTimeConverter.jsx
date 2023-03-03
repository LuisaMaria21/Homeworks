import React, { useState } from 'react';

function SecondsToTimeConverter() {
  const [seconds, setSeconds] = useState(0);

  const convertSecondsToTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours} horas, ${minutes} minutos, ${remainingSeconds} segundos`;
  };

  const handleInputChange = (event) => {
    setSeconds(event.target.value);
  };

  return (
    <div>
      <label>
        Ingresa los segundos:
        <input type="number" value={seconds} onChange={handleInputChange} />
      </label>
      <p>{convertSecondsToTime(seconds)}</p>
    </div>
  );
}

export default SecondsToTimeConverter;
