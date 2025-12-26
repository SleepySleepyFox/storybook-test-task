import React, { useState } from 'react'
import "./Input.css"
import { Eye, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

type Input = {
  type: "password" | "text" | "number"
  placeholder?: string
  clearable?: boolean
}
export default function Input({placeholder, type="text", clearable=true}: Input) {
  const [data, setData] = useState('')
  const [currentType, setCurrentType] = useState(type)

  return (
    <AnimatePresence>
      <motion.div 
        className='input-component-container'
            initial={{ opacity: 0, y: 20 }}    
            animate={{ opacity: 1, y: 0 }}     
            exit={{ opacity: 0, y: 20 }}       
            transition={{ duration: 0.3 }}
        >
      <div className='input-field-container'>
        <input type={`${currentType}`} onChange={(e) => setData(e.target.value)} value={data} placeholder={`${placeholder}`} className='input-field'/>
        {clearable && <X onClick={() => setData('')} className='input-x'/>}
        {type == "password" 
        && <motion.div
          initial={{ opacity: 0}}    
          animate={{ opacity: 1}}     
          exit={{ opacity: 0}}       
          transition={{ duration: 0.5 }}
        >
          {currentType == "password" 
          ? <Eye onClick={() => {setCurrentType("text")}}/> 
          : <Eye onClick={() => setCurrentType("password")}/>}
          </motion.div>}
      </div>
    </motion.div>
    </AnimatePresence>
  )
}
