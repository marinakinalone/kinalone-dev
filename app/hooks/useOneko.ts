import { useEffect, useRef } from 'react'
import {
  getSpriteBackgroundPosition,
  ONEKO_CATCH_DISTANCE,
  ONEKO_SPEED,
} from '../lib/oneko/spriteSets'
import type { IdleAnimationName, SpriteName } from '../lib/oneko/types'

type UseOnekoParams = {
  enabled: boolean
  initialPosition: { x: number; y: number }
}

const useOneko = (
  nekoRef: React.RefObject<HTMLDivElement | null>,
  { enabled, initialPosition }: UseOnekoParams,
) => {
  const nekoPosX = useRef(initialPosition.x)
  const nekoPosY = useRef(initialPosition.y)
  const mousePosX = useRef(initialPosition.x)
  const mousePosY = useRef(initialPosition.y)
  const frameCount = useRef(0)
  const idleTime = useRef(0)
  const idleAnimation = useRef<IdleAnimationName | null>(null)
  const idleAnimationFrame = useRef(0)
  const lastFrameTimestamp = useRef<number | undefined>(undefined)
  const animationFrameId = useRef<number | undefined>(undefined)

  useEffect(() => {
    nekoPosX.current = initialPosition.x
    nekoPosY.current = initialPosition.y
    mousePosX.current = initialPosition.x
    mousePosY.current = initialPosition.y
    frameCount.current = 0
    idleTime.current = 0
    idleAnimation.current = null
    idleAnimationFrame.current = 0
    lastFrameTimestamp.current = undefined
  }, [initialPosition.x, initialPosition.y])

  useEffect(() => {
    if (!enabled) {
      return
    }

    const nekoEl = nekoRef.current
    if (!nekoEl) {
      return
    }

    const setSprite = (name: SpriteName, frame: number) => {
      nekoEl.style.backgroundPosition = getSpriteBackgroundPosition(name, frame)
    }

    const resetIdleAnimation = () => {
      idleAnimation.current = null
      idleAnimationFrame.current = 0
    }

    const idle = () => {
      idleTime.current += 1

      if (
        idleTime.current > 10 &&
        Math.floor(Math.random() * 200) === 0 &&
        idleAnimation.current === null
      ) {
        const availableIdleAnimations: IdleAnimationName[] = ['sleeping', 'scratchSelf']

        if (nekoPosX.current < 32) {
          availableIdleAnimations.push('scratchWallW')
        }
        if (nekoPosY.current < 32) {
          availableIdleAnimations.push('scratchWallN')
        }
        if (nekoPosX.current > window.innerWidth - 32) {
          availableIdleAnimations.push('scratchWallE')
        }
        if (nekoPosY.current > window.innerHeight - 32) {
          availableIdleAnimations.push('scratchWallS')
        }

        idleAnimation.current =
          availableIdleAnimations[
            Math.floor(Math.random() * availableIdleAnimations.length)
          ]
      }

      switch (idleAnimation.current) {
        case 'sleeping':
          if (idleAnimationFrame.current < 8) {
            setSprite('tired', 0)
            break
          }
          setSprite('sleeping', Math.floor(idleAnimationFrame.current / 4))
          if (idleAnimationFrame.current > 192) {
            resetIdleAnimation()
          }
          break
        case 'scratchWallN':
        case 'scratchWallS':
        case 'scratchWallE':
        case 'scratchWallW':
        case 'scratchSelf':
          setSprite(idleAnimation.current, idleAnimationFrame.current)
          if (idleAnimationFrame.current > 9) {
            resetIdleAnimation()
          }
          break
        default:
          setSprite('idle', 0)
          return
      }

      idleAnimationFrame.current += 1
    }

    const frame = () => {
      frameCount.current += 1
      const diffX = nekoPosX.current - mousePosX.current
      const diffY = nekoPosY.current - mousePosY.current
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2)

      if (distance < ONEKO_SPEED || distance < ONEKO_CATCH_DISTANCE) {
        idle()
        return
      }

      idleAnimation.current = null
      idleAnimationFrame.current = 0

      if (idleTime.current > 1) {
        setSprite('alert', 0)
        idleTime.current = Math.min(idleTime.current, 7)
        idleTime.current -= 1
        return
      }

      let direction = ''
      direction += diffY / distance > 0.5 ? 'N' : ''
      direction += diffY / distance < -0.5 ? 'S' : ''
      direction += diffX / distance > 0.5 ? 'W' : ''
      direction += diffX / distance < -0.5 ? 'E' : ''
      setSprite(direction as SpriteName, frameCount.current)

      nekoPosX.current -= (diffX / distance) * ONEKO_SPEED
      nekoPosY.current -= (diffY / distance) * ONEKO_SPEED

      nekoPosX.current = Math.min(
        Math.max(16, nekoPosX.current),
        window.innerWidth - 16,
      )
      nekoPosY.current = Math.min(
        Math.max(16, nekoPosY.current),
        window.innerHeight - 16,
      )

      nekoEl.style.left = `${nekoPosX.current - 16}px`
      nekoEl.style.top = `${nekoPosY.current - 16}px`
    }

    const onAnimationFrame = (timestamp: number) => {
      if (!nekoEl.isConnected) {
        return
      }

      if (!lastFrameTimestamp.current) {
        lastFrameTimestamp.current = timestamp
      }

      if (timestamp - lastFrameTimestamp.current > 100) {
        lastFrameTimestamp.current = timestamp
        frame()
      }

      animationFrameId.current = window.requestAnimationFrame(onAnimationFrame)
    }

    const onMouseMove = (event: MouseEvent) => {
      mousePosX.current = event.clientX
      mousePosY.current = event.clientY
    }

    nekoEl.style.left = `${nekoPosX.current - 16}px`
    nekoEl.style.top = `${nekoPosY.current - 16}px`
    setSprite('idle', 0)

    document.addEventListener('mousemove', onMouseMove)
    animationFrameId.current = window.requestAnimationFrame(onAnimationFrame)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      if (animationFrameId.current !== undefined) {
        window.cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [enabled, nekoRef])
}

export default useOneko
