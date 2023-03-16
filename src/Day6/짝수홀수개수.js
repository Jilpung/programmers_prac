function solution(num_list) {
  let even = num_list.filter(e=> e%2 == 0).push();
  let odd = num_list.filter(e=> e%2 !== 0).push();
  return [even, odd];
}

