import React, {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import useHasHover from '../../hooks/useHasHover'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { device } from '../../styles/breakpoints'

interface IHoverImageProps {
  src: string
  alt: string
  children: React.ReactNode
}

type Placement = 'above' | 'below'

type Position = {
  left: number
  top?: number
  bottom?: number
}

// Estimated popover height (image + padding + gap) used only to decide whether
// there is enough room below the trigger before flipping the image above it.
const ESTIMATED_HEIGHT = 280
const POPOVER_MAX_WIDTH = 220
const GAP = 8
const VIEWPORT_MARGIN = 8

const emptySubscribe = () => () => {}

const Wrapper = styled.span`
  display: inline;
`

const Trigger = styled.button`
  font: inherit;
  color: ${(props) => props.theme.color.neutral};
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  text-decoration: underline dotted;
  text-underline-offset: 0.2rem;

  &:hover {
    color: ${(props) => props.theme.color.hover};
  }

  &:focus-visible {
    color: ${(props) => props.theme.color.focus};
    outline: 2px dashed ${(props) => props.theme.color.focus};
    outline-offset: 0.2rem;
  }
`

const Popover = styled.span<{
  $visible: boolean
  $placement: Placement
  $prefersReducedMotion: boolean
}>`
  position: fixed;
  z-index: 1000;
  display: inline-block;
  padding: ${(props) => props.theme.spacing.xs};
  background-color: ${(props) => props.theme.color.secondary};
  border: ${(props) => props.theme.border.regular};
  box-sizing: border-box;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
  pointer-events: ${(props) => (props.$visible ? 'auto' : 'none')};
  transform: translateY(
    ${(props) => {
      if (props.$visible) return '0'
      return props.$placement === 'above' ? '0.25rem' : '-0.25rem'
    }}
  );
  transition: ${(props) =>
    props.$prefersReducedMotion
      ? 'none'
      : 'opacity 0.2s ease-out, transform 0.2s ease-out, visibility 0.2s'};
`

const Image = styled.img`
  display: block;
  width: auto;
  max-width: 200px;
  max-height: 240px;
  height: auto;

  @media ${device.mobileMaxWidth} {
    max-width: 150px;
    max-height: 190px;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: calc(-1 * ${(props) => props.theme.spacing.xs});
  right: calc(-1 * ${(props) => props.theme.spacing.xs});
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font: inherit;
  line-height: 1;
  color: ${(props) => props.theme.color.neutral};
  background-color: ${(props) => props.theme.color.secondary};
  border: ${(props) => props.theme.border.regular};
  border-radius: 50%;
  cursor: pointer;

  &:focus-visible {
    outline: 2px dashed ${(props) => props.theme.color.focus};
    outline-offset: 0.2rem;
  }
`

const HoverImage = ({ src, alt, children }: IHoverImageProps) => {
  const hasHover = useHasHover()
  const prefersReducedMotion = usePrefersReducedMotion()
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState<Placement>('below')
  const [position, setPosition] = useState<Position>({ left: 0, top: 0 })
  const popoverId = useId()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const popoverRef = useRef<HTMLSpanElement>(null)
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  )

  const close = useCallback(() => setOpen(false), [])

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current
    if (!trigger) return

    const rect = trigger.getBoundingClientRect()
    const spaceBelow = window.innerHeight - rect.bottom
    const spaceAbove = rect.top
    const placeAbove = spaceBelow < ESTIMATED_HEIGHT && spaceAbove > spaceBelow

    const maxLeft = window.innerWidth - POPOVER_MAX_WIDTH - VIEWPORT_MARGIN
    const left = Math.max(VIEWPORT_MARGIN, Math.min(rect.left, maxLeft))

    if (placeAbove) {
      setPlacement('above')
      setPosition({ left, bottom: window.innerHeight - rect.top + GAP })
    } else {
      setPlacement('below')
      setPosition({ left, top: rect.bottom + GAP })
    }
  }, [])

  useEffect(() => {
    if (!open) return

    updatePosition()
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)
    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [open, updatePosition])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, close])

  useEffect(() => {
    if (!open || hasHover) return

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (
        !triggerRef.current?.contains(target) &&
        !popoverRef.current?.contains(target)
      ) {
        close()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [open, hasHover, close])

  const hoverHandlers = hasHover
    ? {
        onMouseEnter: () => setOpen(true),
        onMouseLeave: close,
        onFocus: () => setOpen(true),
        onBlur: close,
      }
    : {}

  const handleClick = () => {
    if (hasHover) return
    setOpen((prev) => !prev)
  }

  const popover = (
    <Popover
      ref={popoverRef}
      id={popoverId}
      role="img"
      aria-label={alt}
      aria-hidden={!open}
      $visible={open}
      $placement={placement}
      $prefersReducedMotion={prefersReducedMotion}
      style={{ left: position.left, top: position.top, bottom: position.bottom }}
    >
      <Image src={src} alt={alt} />
      {!hasHover && (
        <CloseButton
          type="button"
          aria-label="Close image"
          onClick={() => {
            close()
            triggerRef.current?.focus()
          }}
        >
          &times;
        </CloseButton>
      )}
    </Popover>
  )

  return (
    <Wrapper>
      <Trigger
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={popoverId}
        onClick={handleClick}
        {...hoverHandlers}
      >
        {children}
      </Trigger>
      {isClient && createPortal(popover, document.body)}
    </Wrapper>
  )
}

export default HoverImage
