import { useState } from 'react'

export default function Bt1() {
    const [title,setTitle] = useState<string>('')
    document.title = title
    const handleChage=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setTitle(e.target.value)
    }
  return (
    <div>Bài tập 1
        <div>
            <input type="text" onChange={handleChage}/>
        </div>
    </div>
  )
}
