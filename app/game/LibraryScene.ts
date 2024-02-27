import Phaser from 'phaser'

class LibraryScene extends Phaser.Scene {
  constructor() {
    super()
  }

  preload() {
    this.load.tilemapTiledJSON({ key: 'tilemap', url: 'game/map/tilemap.json' })

    this.load.image('tiles', 'game/map/tileset.png')
  }

  create() {
    // sanity check to verify if we have the correct path
    // this.add.image(0, 0, 'tiles')

    const map = this.make.tilemap({ key: 'tilemap', tileHeight: 32, tileWidth: 32 })
    const tileset = map.addTilesetImage('tileset', 'tiles')
    console.log('tileset', typeof tileset)

    const layer = map.createLayer('decor', tileset || '', 0, 0)
  }

  update() {}

  private createNewGame() {
    // this launches the game scene
    this.scene.launch('game')
  }
}

export default LibraryScene
