// перебираемые оьекты
// let range = {
//     from: 1,
//     to: 5
//   };
// через this
/* 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function() {
    // ...она возвращает объект итератора:
    // 2. Далее, for..of работает только с этим итератором,
    // запрашивая у него новые значения
    return {
      current: this.from,
      last: this.to,
      // 3. next() вызывается на каждой итерации цикла for..of
      next() {
        // 4. он должен вернуть значение в виде объекта {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
 
  
  // теперь работает!
  for (let num of range) {
    alert(num); // 1, затем 2, 3, 4, 5
  }
  */

/*
// Строка перебор
for (let char of "test") {
  // срабатывает 4 раза: по одному для каждого символа
  alert( char ); // t, затем e, затем s, затем t
}

// даже так будет работать
let str = '𝒳😂';
for (let char of str) {
    alert( char ); // 𝒳, а затем 😂
}
*/

/*
let range = {
    from: 1,
    to: 5
  };
let arr = Array.from(range);
alert(arr); // 1,2,3,4,5
// range взят из примера в начале статьи
// возводим каждое число в квадрат
let arr = Array.from(range, num => num * num);
alert(arr); // 1,4,9,16,25
*/

// Здесь мы используем Array.from, чтобы превратить строку в массив её элементов:
// let str = '𝒳😂';
// разбивает строку на массив её элементов
// let chars = Array.from(str);
// alert(chars[0]); // 𝒳
// alert(chars[1]); // 😂
// alert(chars.length); // 2
// В отличие от str.split, этот метод в работе опирается на итерируемость строки, и поэтому, как и for..of, он корректно работает с суррогатными парами.

// Технически это то же самое, что и:
// let str = '𝒳😂';
// let chars = []; // Array.from внутри себя выполняет тот же цикл
// for (let char of str) {
//   chars.push(char);
// }
// alert(chars);
// …Но гораздо короче. Конец перебирания строк, обьектов, массивов.

// objects, keys, values
// Подсчёт суммы значений ключа обьекта (reduce)
// let salaries = {
//     "John": 5,
//     "Pete": 10,
//     "Mary": 22.4780
//   };
//   function sumSalaries(salaries) {
//   return Object.values(salaries).reduce((a, b) => a + b, 0)
//   }
//   alert( sumSalaries(salaries) );

// Также через for...of
// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//       sum += salary;
//     }
//     return sum;
//   }
//   alert( sumSalaries(salaries) );

