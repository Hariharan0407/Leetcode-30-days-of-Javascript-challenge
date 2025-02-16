// var createCounter = function(n) {
//     let count = 0;
//     return function() {
//         if(count==0){
//            count++
//         }
//         else{
//             n = n+1;
//             count++
//         }
//         return n
//     };
// };

// /** 
//  * const counter = createCounter(10)
//  * counter() // 10
//  * counter() // 11
//  * counter() // 12
//  */
let functions = [x => x + 1, x => 2 * x]
x = functions[1](10)
console.log(x);
// const fn = compose(functions)
// i= functions.length -1
// console.log(i);
// for (let i = 0;i=2; i++){
//     console.log(functions[i](5));

    // console.log(functions[i]);
// }
// for (fn of functions){   
//     console.log(fn)
// }
