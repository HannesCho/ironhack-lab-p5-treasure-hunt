class Game {
  constructor() {
    this.player = new Player();
    this.treasure = new Treasure(500, 500);
    this.score = 0;
  }

  preload() {
		this.player.image = loadImage('../assets/character-down.png');
    this.treasure.image = loadImage('../assets/treasure.png')
    this.treasure.setRandomPosition()
	}

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    clear()
    for (let i = 0; i <= WIDTH ; i += 100) {
        stroke('red')
        line(0, i, WIDTH, i) // horizontal lines - y changes
        stroke('blue') 
        line(i, 0, i, HEIGHT) //vertical lines - x changes 
    }
  }

  drawPlayer() {
		// the player can draw itself
		this.player.drawPlayer();
  }
  
  drawTreasure() {
    this.treasure.drawTreasure();
  }
}

class Player {
  constructor() {
    this.row = 0;
    this.col = 0;
    this.width = 100;
    this.height = 100;
    this.image;
  }

  moveUp () {
    clear()
    this.col -= 100;
    this.image = loadImage('assets/character-up.png');
  }

  moveDown (){
    clear()
    this.col += 100;
    this.image = loadImage('assets/character-down.png');
  }

  moveLeft () {
    clear()
    this.row -= 100;
    this.image = loadImage('assets/character-left.png');
  }

  moveRight () {
    clear()
    this.row += 100;
    this.image = loadImage('assets/character-right.png');
  }

  drawPlayer () {
    image(this.image, this.row, this.col, this.width, this.height);
  }
}

class Treasure {
  constructor(col, row) {
    this.row = row;
    this.col = col;
    this.image;
  }

  setRandomPosition() {
    this.row = 100 * Math.floor(Math.random() * 10);
    this.col = 100 * Math.floor(Math.random() * 10);
  }

  drawTreasure() {
    image(this.image, this.row, this.col, 100, 100)
  }
}