function number(bustStops) {
  return bustStops
        .map((x) => x[0] - x[1])
        .reduce((a, b) => a + b, 0)
}

console.log(number([[10,0],[3,5],[5,8]]))
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
console.log()