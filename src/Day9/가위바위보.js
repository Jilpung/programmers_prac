function solution(rsp) {
  const rspWin = { 2 : 0, 0 : 5, 5 : 2 };
  return [...rsp].map(el => rspWin[el]).join('')
}