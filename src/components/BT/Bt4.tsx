import React, { useEffect, useRef } from 'react'

export default function Bt4() {
    const inputRef = useRef(null);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);
  return (
    <div style={{ paddingTop: 30 }}>Bài tập 4
        <div>
            <input ref={inputRef} type="text" placeholder='Focus me'/>
        </div>
    </div>
  )
}
