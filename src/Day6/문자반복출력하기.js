function solution(my_string, n) {
  return my_string.split("").map(e=>e.repeat(n)).join("")
}


function solution(my_string, n) {
    let ans = '';
    for (let s of my_string) ans+=s.repeat(n);
    return ans;
}