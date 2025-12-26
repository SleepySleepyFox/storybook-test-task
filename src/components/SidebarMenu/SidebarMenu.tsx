import React, { useState } from 'react'
import { Sidebar} from "lucide-react"
import "./SidebarMenu.css"
import { AnimatePresence, motion } from 'framer-motion'

export default function SidebarMenu({children}: {children: React.ReactNode}) {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  return (
    <div className='sidebar-menu-container'>
      <AnimatePresence>
      <div>
        <Sidebar 
          onClick={() => setSidebarVisible(e => !e)} 
          className='sidebar-menu-togel-open'
          />
      </div>
        <div 
          className={`sidebar-menu-content ${sidebarVisible ? "sidebar-menu-open" : "sidebar-menu-closed" }`}>
            {sidebarVisible && <div>
              <motion.div
              initial={{ opacity: 0, x: -20}}    
              animate={{ opacity: 1, x: 0}}     
              exit={{ opacity: 0, x: -20}}       
              transition={{ duration: 0.5, delay: 0.3}}>
                {children}
              </motion.div>
            </div>}
          </div>
          
        </AnimatePresence>
    </div>
  )
}
