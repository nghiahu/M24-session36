import React, { useState } from 'react'

export default function Bt2() {
    const [count,setCount] = useState<number>(0)
    document.title = `Click ${count} lần`
    const handleClick=()=>{
        setCount(count + 1)
    }
  return (
    <div style={{paddingTop:30}}>Bài tập 2 
        <div><button onClick={handleClick}>Đã click {count} lần </button></div>
    </div>
  )
}
