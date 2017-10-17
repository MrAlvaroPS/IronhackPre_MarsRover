


var grid = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, "rover", null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
];

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};


function turnLeft(rover) {
  console.log("turnLeft was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("Rover is now facing West");
      break;

    case "W":
      rover.direction = "S";
      console.log("Rover is now facing South");
      break;

    case "S":
      rover.direction = "E";
      console.log("Rover is now facing East");
      break;

    case "E":
      rover.direction = "N";
      console.log("Rover is now facing North");

  }
}

function turnRight(rover) {
  console.log("turnRight was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Rover is now facing East");
      break;

    case "W":
      rover.direction = "N";
      console.log("rover is now facing North");
      break;

    case "S":
      rover.direction = "W";
      console.log("Rover is now facing West");
      break;

    case "E":
      rover.direction = "S";
      console.log("Rover is now facing South");
      break;
  }
}

function moveForward(rover) {
  console.log("moveForward was called");

  if (rover.direction == "W") {
    rover.x -= 1;
    rover.travelLog.push([rover.x, rover.y]);
  } else if (rover.direction == "N") {
    rover.y -= 1;
    rover.travelLog.push([rover.x, rover.y]);
  } else if (rover.direction == "S") {
    rover.y += 1;
    rover.travelLog.push([rover.x, rover.y]);
  } else {
    console.log("El rover no se mueve!");
  }
  console.log("La posición del Rover es [" + rover.x + "," + rover.y + "]");
  console.log('\n');
}

var comando = "rffrfflfrff";


for (var i = 1; i < comando.length; i++) {
  var letra = comando.charAt(i);
  if (letra == "f") {
    moveForward(rover);
  } else if (letra == "r") {
    turnRight(rover);
  } else if (letra == "l") {
    turnLeft(rover);
  } else {
    console.log("No es una direccion valida");
  }
}




console.log(rover.travelLog);
