function backpackDP(capacity, weights, values) {
    const n = weights.length;
    const maxTab = Array.from({ length: n + 1 }, () =>
      Array.from({ length: capacity + 1 }, () => 0)
    );
    let iterations = 0;
  
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= capacity; j++) {
        iterations++;
        if (weights[i - 1] <= j) {
          maxTab[i][j] = Math.max(
            maxTab[i - 1][j],
            values[i - 1] + maxTab[i - 1][j - weights[i - 1]]
          );
        } else {
          maxTab[i][j] = maxTab[i - 1][j];
        }
      }
    }
  
    const bestSubset = [];
    let remainingCapacity = capacity;
  
    for (let i = n; i > 0; i--) {
      if (maxTab[i][remainingCapacity] !== maxTab[i - 1][remainingCapacity]) {
        bestSubset.push(i - 1);
        remainingCapacity -= weights[i - 1];
      }
    }
  
    return {
      subset: bestSubset.reverse(),
      iterations: iterations,
      maxValue: maxTab[n][capacity],
    };
  }

  console.log("---PROBLEMA DA MOCHILA : PROGRAMACAO DINAMICA---");

  console.log("caso de teste 1:");
  let capacity1 = 165;
  let weights1 = [23, 31, 29, 44, 53, 38, 63, 85, 89, 82];
  let values1 = [92, 57, 49, 68, 60, 43, 67, 84, 87, 72];
  
  let selected1 = backpackDP(capacity1, weights1, values1);
  console.log(selected1);
  
  console.log("caso de teste 1:");
  let capacity2 = 190;
  let weights2 = [56, 59, 80, 64, 75, 17];
  let values2 = [50, 50, 64, 46, 50, 5];
  
  let selected2 = backpackDP(capacity2, weights2, values2);
  console.log(selected2);