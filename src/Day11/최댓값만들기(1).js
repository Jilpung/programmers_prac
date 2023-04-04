
function solution(numbers) {
  const num = numbers.sort((a, b) => b - a)
  return  num[0] * num[1]
}


// 구조분해할당을 사용해보고 싶다.
// function solution(numbers) {
//     let [a, b] = numbers.sort((a,b) => b - a);
//     return a * b;
// }
