//  метод преобразования Symbol.toPrimitive 
// let user = {
//   name: "John",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
    // alert(`hint: ${hint}`); // показываем какой хинт используется при вызове (необязательно)
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   },
// };

// демонстрация результатов преобразований:
// alert(user); // hint: string -> {name: "John"}
// alert(+user); // hint: number -> 1000
// alert(user + 500); // hint: default -> 1500 //при hint = default  происходит сложение user.money + 500

// методы преобразования toString и valueOf
// let user = {
//     name: "John",
//     money: 1000,
  
//     // для хинта равного "string"
//     toString() {
//       return `{name: "${this.name}"}`;
//     },
  
//     // для хинта равного "number" или "default"
//     valueOf() {
//       return this.money;
//     }
  
//   };
  
//   alert(user); // toString -> {name: "John"}
//   alert(+user); // valueOf -> 1000
//   alert(user + 500); // valueOf -> 1500

//   универсальный метод преобразования toString
let user = {
    name: "John",
  
    toString() {
      return this.name;
    }
  };
  
  alert(user); // toString -> John
  alert(user + 500); // toString -> John500 //В отсутствие Symbol.toPrimitive и valueOf, 
//   toString обработает все примитивные преобразования
// Итого: эти методы должны возвращать примитив !!!а не обьект