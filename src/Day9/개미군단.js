function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + (hp % 5) % 3
}

// 단독으로 floor가 아닌 Math.floor()로 사용 
// 나눈 값이 아닌 나머지로 다음을 계산해야함