import React, { useState } from 'react'
import { Sidebar, X} from "lucide-react"
import "./SidebarMenu.css"
import { AnimatePresence, motion } from 'framer-motion'

export default function SidebarMenu({text}: {text: string}) {
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
              {text}
            </div>}
          </div>
          
        </AnimatePresence>
    </div>
  )
}
