function solution(my_string) {
    
    return my_string.replace(/['a','e','i','o','u']/g,'')
    
}

//이렇게 작성도 해보고 싶다.  
// function solution(my_string) {
    
//     const str = 'aeiou'
//     let newString = my_string.split('').filter((el)=>(!str.includes(el))).join('')
    
//     return newString
    
// }