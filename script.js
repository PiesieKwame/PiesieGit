let reverse = function (number) {
  let result = 0;
  while (number !== 0) {
    result = result * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return result;
};
// let beautifulDay = function (i, j, k) {
//   let days = 0;
//   while (i <= j) {
//     if (i - (reverse(i) % k) === 0) ++days;
//     ++i;
//   }
//   return days;
// };

// 20 ---> 02 res = 1, num= 2.1, 22.1, result
// 21 --> 12

let beautifulDay = function (i, j, k) {
  let days = 0;
  for (let n = i; n <= j; n++) {
    let siei = n - reverse(n);
    if (siei % k === 0) days++;
  }
  // while (i <= j) {
  //   if (i - (reverse(i) % k) === 0) ++days;
  //   ++i;
  // }
  return days;
};

// console.log("Hello world");
// console.log(beautifulDay(20, 23, 8));

function getCharArray(h, word) {
  const map = new Map();
  let i = "a".charCodeAt(0);
  let j = "z".charCodeAt(0);
  for (; i < j; i++) map.set(String.fromCharCode(i), h[i - 97]);
  const max = word
    .split("")
    .reduce((acc, curr) => (map.get(curr) > acc ? map.get(curr) : acc), 0);
  return max * word.length;
}

const z = getCharArray(
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    7,
  ],
  "zaba"
);

console.log(z);
