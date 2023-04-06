function solution(my_string) {
  let num = my_string.split('').filter(el => el.replace(/[a-z, A-Z]/g,'')).map(el => Number(el)).reduce((acc, curr)=>acc+curr)
  return num
}