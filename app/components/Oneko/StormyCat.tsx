import React, { useRef, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import useOneko from '../../hooks/useOneko'
import {
  getSpriteBackgroundPosition,
  ONEKO_SPRITE_SIZE,
  ONEKO_SPRITE_URL,
} from '../../lib/oneko/spriteSets'

const subscribe = () => () => {}

const InlineTrigger = styled.button<{ $hidden?: boolean }>`
  display: inline-block;
  vertical-align: middle;
  margin-left: ${(props) => props.theme.spacing.xs};
  width: ${ONEKO_SPRITE_SIZE}px;
  height: ${ONEKO_SPRITE_SIZE}px;
  padding: 0;
  border: none;
  background-color: transparent;
  background-image: url(${ONEKO_SPRITE_URL});
  background-position: ${getSpriteBackgroundPosition('idle', 0)};
  background-repeat: no-repeat;
  image-rendering: pixelated;
  cursor: pointer;
  visibility: ${(props) => (props.$hidden ? 'hidden' : 'visible')};
  pointer-events: ${(props) => (props.$hidden ? 'none' : 'auto')};
`

const FollowingCat = styled.div`
  width: ${ONEKO_SPRITE_SIZE}px;
  height: ${ONEKO_SPRITE_SIZE}px;
  position: fixed;
  pointer-events: none;
  image-rendering: pixelated;
  z-index: 2147483647;
  background-image: url(${ONEKO_SPRITE_URL});
  background-repeat: no-repeat;
`

const StormyCat = () => {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const nekoRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [spawnPosition, setSpawnPosition] = useState({ x: 32, y: 32 })
  const isMounted = useSyncExternalStore(subscribe, () => true, () => false)

  useOneko(nekoRef, {
    enabled: isActive,
    initialPosition: spawnPosition,
  })

  const handleClick = () => {
    const rect = triggerRef.current?.getBoundingClientRect()
    if (rect) {
      setSpawnPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      })
    }
    setIsActive(true)
  }

  return (
    <>
      <InlineTrigger
        ref={triggerRef}
        type="button"
        onClick={handleClick}
        aria-label="Let Stormy follow your cursor"
        aria-hidden={isActive}
        tabIndex={isActive ? -1 : 0}
        $hidden={isActive}
      />
      {isActive &&
        isMounted &&
        createPortal(
          <FollowingCat ref={nekoRef} aria-hidden="true" />,
          document.body,
        )}
    </>
  )
}

export default StormyCat
