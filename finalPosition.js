const finalPosition = function (moves) {
  let grid = [0, 0]
  for (const direction of moves) {
    switch(direction){
      case 'north':
        grid[1]++;
        break;
      case 'south':
        grid[1]--;
        break;
      case 'west':
        grid[0]--;
        break;
      case 'east':
        grid[0]++;
        break
    }
  }
  return grid;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));