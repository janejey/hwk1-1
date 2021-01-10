// //1 chkaroghatsa haskanal` inchpes gtnem ed tokosayin masy
// function frequency (str){
//  let result = {};
//  for (let i = 0; i < str.length; i++){
//   if(result[str[i]] == undefined) {
//     result[str[i]] = 1
//     } else {
//       result[str[i]]++;
//       result[str[i]] / str.length
//  }
// }return result;
// }

// console.log(frequency([1, 1, 2, 2, 3]))

// //2
// function types (arr) {
//   let type = {
//     Numbers: 0,
//     Strings: 0
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//       type.Numbers++
//     } else { type.Strings++}
//   } return type
// }
// console.log(types([1, '10', 'hi', 2, 3]))

// //3
// function longestWord(str) {
//   const strArr = str.split(' ');
//   let longestWord = "";
//   for(let i = 0; i < strArr.length; i++){
//     if(strArr[i].length > longestWord.length){
//          longestWord = strArr[i];
//      }
//   }
//  return longestWord
// }
// console.log(longestWord('A revolution without dancing is a revolution not worth having.'))