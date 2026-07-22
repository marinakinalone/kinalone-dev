type SpriteCoords = [number, number]

export type SpriteName =
  | 'idle'
  | 'alert'
  | 'scratchSelf'
  | 'scratchWallN'
  | 'scratchWallS'
  | 'scratchWallE'
  | 'scratchWallW'
  | 'tired'
  | 'sleeping'
  | 'N'
  | 'NE'
  | 'E'
  | 'SE'
  | 'S'
  | 'SW'
  | 'W'
  | 'NW'

export type IdleAnimationName =
  | 'sleeping'
  | 'scratchSelf'
  | 'scratchWallN'
  | 'scratchWallS'
  | 'scratchWallE'
  | 'scratchWallW'

export type SpriteSets = Record<SpriteName, SpriteCoords[]>
