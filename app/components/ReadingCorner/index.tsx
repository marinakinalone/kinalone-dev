import React, { useState } from 'react'
import { SECTIONS } from '../../constants/sections'
import GameModal from '../GameModal'
import Container from '../ui/Container'
import Title from '../ui/Title'

const ReadingCorner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Container id={SECTIONS.READING_CORNER}>
      <Title>ReadingCorner</Title>
      <button onClick={openModal}>Open Game</button>

      {isModalOpen && <GameModal onClose={closeModal} />}
    </Container>
  )
}

export default ReadingCorner
