function solution(numer1, denom1, numer2, denom2) {
  let denom = denom1 * numer2 + denom2 * numer1;
  let numer = denom1 * denom2;
  let maximum = 1;
  
  for(let i = 1; i <= denom; i++) {
      if(denom % i === 0 && numer % i === 0) {
          maximum = i
      }
  }
  
  return [denom / maximum, numer / maximum];
}

//최대공약수를 구하는 수학공식을 코드로 바꾸는 작업이라고 생각!