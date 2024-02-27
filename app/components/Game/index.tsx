import { Game as PhaserGame } from 'phaser'
import { useEffect, useRef, useState } from 'react'
import LibraryScene from '../../game/LibraryScene'

const gameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: LibraryScene,
  parent: 'game-container',
}

export default function Game() {
  const parentEl = useRef<HTMLDivElement>(null)
  useEffect(() => {
    // const config = {
    //   type: Phaser.AUTO,
    //   width: 800,
    //   height: 600,
    //   scene: LibraryScene,
    //   parent: 'game-container',
    // }

    // const game = new Phaser.Game(config)

    // return () => {
    //   game.destroy(true)
    // }
    function initPhaser() {
      new Phaser.Game({
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: LibraryScene,
        parent: 'game-container',
      })
    }

    initPhaser()
  }, [])

  //   useEffect(() => {
  //     if (!parentEl.current) return

  //     new PhaserGame({
  //       ...gameConfig,
  //       parent: parentEl.current,
  //       width: parentEl.current.offsetWidth,
  //       height: parentEl.current.offsetHeight,
  //     })

  //     return () => {
  //       newGame?.destroy(true, true)
  //     }
  //   }, [])

  return <div ref={parentEl} className="game-container" />
}
