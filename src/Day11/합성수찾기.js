function solution(n) {
  let arr = new Set();
  for(let i = 1; i <= n; i++){
      for(let j = 2; j < i; j++){
          if(i % j === 0)
              arr.add(i);
      }
  }
  return arr.size;
}


//for,for문에 좀 생각이 안 닿는거 같다. set은 중복제거용