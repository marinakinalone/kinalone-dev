import dynamic from 'next/dynamic'
import React from 'react'

const DynamicComponentWithNoSSR = dynamic(() => import('../Game'), { ssr: false })

const GameModal = ({ onClose }: { onClose: any }) => {
  return (
    <div className="modal">
      <DynamicComponentWithNoSSR />
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default GameModal
