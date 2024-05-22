import React, { useEffect, useState } from 'react'

export default function Bt5() {
    const [time, setTime] = useState(new Date());
    
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
}, []);
  return (
    <div style={{paddingTop:30}}>Bài tập 5
    <p>{time.toLocaleTimeString()}</p>
</div>
  )
}
