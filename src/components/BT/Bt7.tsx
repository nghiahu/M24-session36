import React, { useState } from 'react'

export default function Bt7() {
    const [counter,setCounter] = useState<number>(0)
    const [prevCountRef,setPrevCountRef] = useState<number>()
    const handleClick=()=>{
        setCounter(counter + 1)
        setPrevCountRef(counter + 1 - 1)
    }
  return (
    <div style={{ paddingTop: 30 }}>Bài tập 7
        <div>
            <p>Giá trị trước: {prevCountRef}</p>
            <p>Giá trị hiện tại: {counter}</p> <br />
            <button onClick={handleClick}>Tăng</button>
        </div>
    </div>
  )
}
