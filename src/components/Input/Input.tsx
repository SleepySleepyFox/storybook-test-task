import React, { useState } from 'react'
import "./Input.css"
import { Eye, X } from 'lucide-react'
type Input = {
  placeholder?: string
}
export default function Input({placeholder}: Input) {
  const [data, setData] = useState('')
  return (
    <div className='input-component-container'>
      <div className='input-field-container'>
        <input onChange={(e) => setData(e.target.value)} value={data} placeholder={`${placeholder}`} className='input-field'/>
      <X onClick={() => setData('')}/>
      <Eye/>
      </div>
    </div>
  )
}
