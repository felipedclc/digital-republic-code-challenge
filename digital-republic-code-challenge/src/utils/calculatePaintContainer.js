// tamanho das latas de tinta em litros 
const paintCan1 = 0.5; // 2,5 m2
const paintCan2 = 2.5; // 12,5 m2
const paintCan3 = 3.6; // 18 m2
const paintCan4 = 18;  // 90 m2

const calculateTotalPaintLiters = (totalArea) => totalArea / 5;

const calculateCanOfPaints = (totalArea) => {
  let liters = calculateTotalPaintLiters(totalArea);
  const countCans = { 'can_0_5L': 0, 'can_2_5L': 0, 'can_3_6L': 0, 'can_18L': 0 };
  console.log("gasta", liters, "L");

  while (liters > 0) {
    if (liters <= paintCan1 && liters > 0) {
      liters -= paintCan1;
      countCans.can_0_5L += 1;
    };

    if (liters <= paintCan2 && liters > 0) {
      liters -= paintCan2;
      countCans.can_2_5L += 1;
    };

    if (liters <= paintCan3 && liters > 0) {
      liters -= paintCan3;
      countCans.can_3_6L += 1;
    };

    if (liters <= paintCan4 && liters > 0) {
      liters -= paintCan4;
      countCans.can_18L += 1;
    };

    if (liters >= paintCan4 && liters > 0) {
      liters -= paintCan4
      countCans.can_18L += 1;
    }
  };

  return countCans;
};

console.log(calculateCanOfPaints(100));

module.exports = { calculateCanOfPaints };
