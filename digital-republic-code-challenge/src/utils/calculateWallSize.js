const {
  maxWallSize,
  maxSizeOfWindowsAndDoors,
  minSizeOfWallWithDoor
} = require("./validations");

// medidas em metros
const DOOR_HEIGHT = 1.90;
const DOOR_AREA = 0.80 * DOOR_HEIGHT;
const WINDOW_AREA = 2.00 * 1.20;

const calculateWallArea = (height, width) => (height * width);

const calculatePaintAreaOfTheWall = (wallHeight, wallWidth, numberDoors, numberWindows) => {
  const wallArea = calculateWallArea(wallHeight, wallWidth);

  try {
    maxWallSize(wallHeight)
    maxWallSize(wallWidth)
    maxSizeOfWindowsAndDoors(DOOR_AREA * numberDoors, WINDOW_AREA * numberWindows, wallArea);
    numberDoors > 0 && minSizeOfWallWithDoor(wallHeight, DOOR_HEIGHT);


    const paintArea = wallArea - (numberDoors * DOOR_AREA) - (numberWindows * WINDOW_AREA);
    return Number((paintArea).toFixed(2));
  } catch (e) {
    return { error: e.message };
  }
};

// console.log(calculatePaintAreaOfTheWall(4, 3, 1, 1)); // altura, largura, portas, janelas

module.exports = { calculatePaintAreaOfTheWall };
