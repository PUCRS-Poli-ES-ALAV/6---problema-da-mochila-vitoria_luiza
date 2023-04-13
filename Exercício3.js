function backpack(capacity, weights, values) {
    let iterations = 0;
    const n = weights.length;
    let max = -Infinity;
    let bestSubset = [];
  
    function generateSubsets(index, subset) {
        iterations++;

      if (index === n) {
        let sum = subset.reduce((total, index) => total + values[index], 0);
        let weight = subset.reduce((total, index) => total + weights[index], 0);
  
        if (sum > max && weight <= capacity) {
          max = sum;
          bestSubset = subset.slice();
        }
        return;
      }
  
      generateSubsets(index + 1, subset.concat(index));
      generateSubsets(index + 1, subset);
    }
  
    generateSubsets(0, []);
  
    return {bestSubset: bestSubset.map(index => index + 1), iterations: iterations};
}

console.log("---PROBLEMA DA MOCHILA : VITORIA E LUIZA---");
console.log("caso de teste 1:");
let capacity1 = 165;
let weights1 = [23, 31, 29, 44, 53, 38, 63, 85, 89, 82];
let values1 = [92, 57, 49, 68, 60, 43, 67, 84, 87, 72];

let selected1 = backpack(capacity1, weights1, values1);
console.log(selected1);

console.log("caso de teste 1:");
let capacity2 = 190;
let weights2 = [56, 59, 80, 64, 75, 17];
let values2 = [50, 50, 64, 46, 50, 5];

let selected2 = backpack(capacity2, weights2, values2);
console.log(selected2);