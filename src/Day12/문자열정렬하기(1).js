function solution(my_string) {
    
  return my_string.split('').filter(el => el.replace(/[a-z]/g,'')).sort((a,b)=> a-b).map(el => Number(el))
}