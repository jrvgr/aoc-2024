const input = Deno.readTextFileSync("./day1_input.txt").trim();

const numberSort = (a: number, b: number) => a - b;
const assign = (item: string, i: number) => parseInt(item.split("   ")[i]);
const left = Array.from(input.split("\n").map(i => assign(i, 0))).sort(numberSort);
const right = Array.from(input.split("\n").map(i => assign(i, 1))).sort(numberSort);
const solutionOne = right.map((num, i) => Math.abs(num - left[i])).reduce((a, b) => a + b, 0);
console.log("solution one: ", solutionOne);
let solutionTwo = 0;
new Set(left).forEach(num => solutionTwo += num * right.filter((rightNum) => rightNum === num).length);
console.log("solution two: ", solutionTwo);
