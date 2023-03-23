function solution(age) {
  let str = 'abcdefghij'
  return Array.from(age.toString()).map(el => str[el]).join('')
}