// medidas em metros
const MIN_WALL_SIZE = 1;
const MAX_WALL_SIZE = 15;

const maxWallSize = (size) => {
  if (size < 1) {
    throw new Error(`O tamanho da parede não pode ser menor que ${MIN_WALL_SIZE} m`);
  };

  if (size > 15) {
    throw new Error(`O tamanho da parede não pode ultrapassar ${MAX_WALL_SIZE} m`);
  };
};

const maxSizeOfWindowsAndDoors = (doorArea, WindowArea, wallArea) => {
  if (doorArea + WindowArea > wallArea / 2) {
    throw new Error(
      "O tamanho das portas e janelas não pode ultrapassar 50% do tamanho da parede"
    );
  };
};

const minSizeOfWallWithDoor = (wallHeight, doorHeight) => {
  if (wallHeight - doorHeight < 0.30) {
    throw new Error("O espaço de parede acima da porta deve ser no mínimo 30 cm")
  };
};

module.exports = {
  maxWallSize,
  maxSizeOfWindowsAndDoors,
  minSizeOfWallWithDoor,
};
