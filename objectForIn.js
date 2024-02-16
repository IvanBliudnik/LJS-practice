// // for..in

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
//   for (let key in user) {
//     // ключи
//     alert( key );  // name, age, isAdmin
//     // значения ключей
//     alert( user[key] ); // John, 30, true
//   }

// //   упорядоченный key в обьекте
// let codes = {
//     "49": "Германия",
//     "41": "Швейцария",
//     "44": "Великобритания",
//     // ..,
//     "1": "США"
//   };
  
//   for (let code in codes) {
//     alert(code); // 1, 41, 44, 49
//   }
//   let codes = {
//     "+49": "Германия",
//     "+41": "Швейцария",
//     "+44": "Великобритания",
//     // ..,
//     "+1": "США"
//   };
  
//   for (let code in codes) {
//     alert( +code ); // 49, 41, 44, 1
//   }

// Сумма свойств обьекта
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
//   let sum = 0;
//     for (let key in salaries) {
//     sum += salaries[key]
//     }
//   console.log(sum)

// умножаем все числовые свойства на 2
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
//   function multiplyNumeric(obj) { 
//     for (let key in obj) { 
//       const isNumber = typeof obj[key] === 'number' 
//     if (isNumber) { 
//             obj[key] *= 2 
//         } 
//     }  
// }
// // function multiplyNumeric(obj) {
// //     for (let key in obj) {
// //     if (typeof obj[key] === "number") {
// //             obj[key] *= 2
// //         }
// //     } 
// // }
// multiplyNumeric(menu)
// console.log(menu);