import type { SpriteSets } from './types'

export const ONEKO_SPRITE_SIZE = 32
export const ONEKO_SPEED = 10
export const ONEKO_CATCH_DISTANCE = 48
export const ONEKO_SPRITE_URL = '/oneko/oneko.gif'

export const spriteSets: SpriteSets = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratchSelf: [
    [-5, 0],
    [-6, 0],
    [-7, 0],
  ],
  scratchWallN: [
    [0, 0],
    [0, -1],
  ],
  scratchWallS: [
    [-7, -1],
    [-6, -2],
  ],
  scratchWallE: [
    [-2, -2],
    [-2, -3],
  ],
  scratchWallW: [
    [-4, 0],
    [-4, -1],
  ],
  tired: [[-3, -2]],
  sleeping: [
    [-2, 0],
    [-2, -1],
  ],
  N: [
    [-1, -2],
    [-1, -3],
  ],
  NE: [
    [0, -2],
    [0, -3],
  ],
  E: [
    [-3, 0],
    [-3, -1],
  ],
  SE: [
    [-5, -1],
    [-5, -2],
  ],
  S: [
    [-6, -3],
    [-7, -2],
  ],
  SW: [
    [-5, -3],
    [-6, -1],
  ],
  W: [
    [-4, -2],
    [-4, -3],
  ],
  NW: [
    [-1, 0],
    [-1, -1],
  ],
}

export const getSpriteBackgroundPosition = (
  name: keyof typeof spriteSets,
  frame: number,
): string => {
  const sprite = spriteSets[name][frame % spriteSets[name].length]
  return `${sprite[0] * ONEKO_SPRITE_SIZE}px ${sprite[1] * ONEKO_SPRITE_SIZE}px`
}
