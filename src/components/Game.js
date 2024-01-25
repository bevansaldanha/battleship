function Ship() {
  this.length;
  this.hits = 0;
  this.sunk = false;
  
  function isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
    }
  }
  function hit() {
    this.hits += 1;
  }
}


function GameBoard() {
  // this.xAxis = [a, b, c, d, e, f, g, h, i, j];
  // this.yAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this.positions = {
    a1:'a1', a2:'a2', a3:'a3', a4:'a4', a5:'a5', a6:'a6', a7:'a7', a8:'a8', a9:'a9', a10:'a10', b1:'b1', b2:'b2', b3:'b3', b4:'b4', b5:'b5', b6:'b6', b7:'b7', b8:'b8', b9:'b9', b10:'b10', c1:'c1', c2:'c2', c3:'c3', c4:'c4', c5:'c5', c6:'c6', c7:'c7', c8:'c8', c9:'c9', c10:'c10', d1:'d1', d2:'d2', d3:'d3', d4:'d4', d5:'d5', d6:'d6', d7:'d7', d8:'d8', d9:'d9', d10:'d10', e1:'e1', e2:'e2', e3:'e3', e4:'e4', e5:'e5', e6:'e6', e7:'e7', e8:'e8', e9:'e9', e10:'e10', f1:'f1', f2:'f2', f3:'f3', f4:'f4', f5:'f5', f6:'f6', f7:'f7', f8:'f8', f9:'f9', f10:'f10', g1:'g1', g2:'g2', g3:'g3', g4:'g4', g5:'g5', g6:'g6', g7:'g7', g8:'g8', g9:'g9', g10:'g10', h1:'h1', h2:'h2', h3:'h3', h4:'h4', h5:'h5', h6:'h6', h7:'h7', h8:'h8', h9:'h9', h10:'h10', i1:'i1', i2:'i2', i3:'i3', i4:'i4', i5:'i5', i6:'i6', i7:'i7', i8:'i8', i9:'i9', i10:'i10', j1:'j1', j2:'j2', j3:'j3', j4:'j4', j5:'j5', j6:'j6', j7:'j7', j8:'j8', j9:'j9', j10:'j10'
  };
  function placeShip(orientation, pos1, ship) {
    const placements = [pos1];
    if (orientation === '-') {
      let x = pos1.split().pop();
      let y = pos1.split()[0];
      console.log(x,y);
      for (let i = ship.length; i > 0; i--) {
        let tempPos = y + (x++)
        placements.push(tempPos)
      }
      console.log(placements);
      // if (!this.positions[pos1]) {
      //   this.positions[pos1] = ship;
      //   ship.firstPos = pos1;
      //   if (!this.positions[pos2]) {
      //     this.positions[pos2] = ship;
      //     ship.secondPos = pos2;
      //   }
      // }
    }
    // if (!this.positions[pos1]) {
    //   this.positions[pos1] = ship;
    //   ship.firstPos = pos1;
    //   if (!this.positions[pos2]) {
    //     this.positions[pos2] = ship;
    //     ship.secondPos = pos2;
    //   }
    // } 
    else {
      return "not allowed";
    }
  }
  function receiveAttack(pos) {
    if (this.positions[pos]) {

    }
  }
}

const ship1 = new Ship(5)
const game = new GameBoard()

game.placeShip('-','a1',ship1)
