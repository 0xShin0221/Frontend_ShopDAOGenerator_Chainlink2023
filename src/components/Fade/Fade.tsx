import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactElement } from 'react'

export const Fade: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
