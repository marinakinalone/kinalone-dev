export const PHASE1_DURATION = '0.4s'
export const PHASE2_DURATION = '0.4s'
export const HEADER_BORDER_DURATION = '0.6s'
export const IMAGE_FADE_DURATION = '0.5s'

export const parseDurationMs = (duration: string): number => {
  if (duration.endsWith('ms')) return parseInt(duration, 10)
  if (duration.endsWith('s')) return parseFloat(duration) * 1000
  return 0
}
