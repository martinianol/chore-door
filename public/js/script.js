//Capturing DOM elements//

let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg'

let startButton = document.getElementById('start');
let currentPlaying = true;

let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');

let current = 0;
let best = 0;

let numCloseDoors = 3;

let haveIt = [];
let doorPaths = [botDoorPath, beachDoorPath, spaceDoorPath]

const randomDoorGenerator = () => {
  let random = Math.floor(Math.random() * numCloseDoors)

  if (haveIt.length >= numCloseDoors) {
    console.log(haveIt)
    return
  } else if (haveIt.includes(random)) {
    return randomDoorGenerator();

  } else {
    haveIt.push(random);
    return randomDoorGenerator();
  }

}




door1.onclick = () => {
  if (door1.src === closedDoorPath && currentPlaying) {
    door1.src = doorPaths[haveIt[0]];
    playDoor(door1)
  }
}

door2.onclick = () => {
  if (door2.src === closedDoorPath && currentPlaying) {
    door2.src = doorPaths[haveIt[1]]
    playDoor(door2)
  }
}

door3.onclick = () => {
  if (door3.src === closedDoorPath && currentPlaying) {
    door3.src = doorPaths[haveIt[2]]
    playDoor(door3)
  }
}

startButton.onclick = () => {
  currentPlaying ? '' : startRound();
}

const startRound = () => {
  door1.src = closedDoorPath
  door2.src = closedDoorPath
  door3.src = closedDoorPath
  numCloseDoors = 3
  currentPlaying = true
  startButton.innerHTML = 'Good luck!'
  haveIt = []
  randomDoorGenerator()
}

const isBot = (door) => {
  return door.src === botDoorPath ? true : false
}

const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = "You win! Play again?"
    current++
    best = Math.max(current, best);

  } else {
    startButton.innerHTML = "Game over! Play again?"
    current = 0
    best = Math.max(current, best);
  }
  currentStreak.innerHTML = current;
  bestStreak.innerHTML = best;
}

const playDoor = (door) => {
  numCloseDoors--;

  if (numCloseDoors === 0) {
    gameOver('win');
    currentPlaying = false
  } else if (isBot(door)) {
    gameOver();
    currentPlaying = false
  }
}

startRound();



