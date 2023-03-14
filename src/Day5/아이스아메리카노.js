function solution(money) {
    return [Math.floor(money / 5500), money % 5500];
}

// function solution(money) {
//     var answer = [];
//     let ice = Math.floor(money / 5500)
//     let cash = money % 5500
//     answer.push(ice, cash)
//     return answer;
// }