function solution(n, k) {
  let number = 2000 * parseInt(n/10)
  if(n/10 < 1){
      return (12000 * n) + (2000 * k)
  }else{
      return (12000 * n) + (2000 * k) - number
  }
}