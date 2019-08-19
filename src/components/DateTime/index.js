import React, { useState, useEffect} from 'react';

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval( () => tick(), 10000 );
    return () => clearInterval(timerID);
  });

   const tick = () => {
    setDate(new Date());
   }

   return (
        <span>{date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'long', hour: '2-digit', minute:'2-digit'})}</span>
    );
}

export default DateTime;

