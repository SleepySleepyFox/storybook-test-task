import React, { useEffect, useState } from 'react'
import "./Toast.css"
import { Ban, CheckCheck, Info, TriangleAlert, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type toastProps = {
    displayedText: string
    type: "success" | "informational" | "warning" | "error"
    subtext?: string
    manualClose?: boolean
    duration?: number
}
export default function Toast({displayedText="Text in Toast", type="success", subtext="ToastSubtext", manualClose=true, duration=3000}: toastProps) {
    const [visible, setVisible] = useState(true)
    const icon: Record<string,React.ReactElement> = {
        "success": <CheckCheck />,
        "informational": <Info/>,
        "warning": <TriangleAlert/>,
        "error": <Ban/>
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
        }, duration);
    
        return () => clearTimeout(timer);
      }, []);

  return (
    <AnimatePresence>
        {visible && <motion.div 
            className={`toast-container toast-${type}`}
            initial={{ opacity: 0, x: 20 }}    
            animate={{ opacity: 1, x: 0 }}     
            exit={{ opacity: 0, x: 20 }}       
            transition={{ duration: 0.3 }}
            >
            {icon[`${type}`]}
            <div className='toast-text-container'>
                <p className='toast-displayed-text'>{displayedText}</p>
                {subtext && <p className='toast-displayed-text toast-subtext'>{subtext}</p>}
            </div>
            {manualClose && <X className='toast-close-button' onClick={() => setVisible(false)}/>}
        </motion.div>}
    </AnimatePresence>
  )
}
