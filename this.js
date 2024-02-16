// Очень важно разобраться потому что ничего не понятно!!!!
// THIS
// let user = { name: "John" };
// let admin = { name: "Admin" };
// function sayHi() {
//   alert( this.name );
// }
// // используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;
// // эти вызовы имеют  разное значение this
// // "this" внутри функции - это объект "перед точкой"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)
// admin['f']();

// Для стрелочной функции
// let user = {
//   firstName: "Ilya",
//   sayHi() {
//     let arrow = () => alert(this.firstName);
//     arrow();
//   }
// };
// user.sayHi(); // Ilya

// При таком наборе будет UNDEFINED потому что
// Здесь значение this внутри makeUser() равно undefined,
// потому что оно вызывается как функция, а не через «точечный» синтаксис как метод.
// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }
// let user = makeUser();
// alert( user.ref.name ); // Undefined, т.е ошибка

// Рабочий THIS
// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     }
//   };
// }
// let user = makeUser();
// alert( user.ref().name ); // John
// Теперь это работает, поскольку user.ref() – это метод.
// И значением this становится объект перед точкой.
// Вначале выполняется prompt THIS, потом всё остальное
// // Калькулятор
// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// Лестница вверх вниз.
// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// ladder.up().up().down().showStep().down().showStep();

// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// А можно через this, возвращая this (сам обьект из вызова)
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert( this.step );
//     return this;
//   }
// };
// ladder.up().up().down().showStep().down().showStep();

// Создание сложных Функций в конструкторе
// function User(name) {
//   this.name = name;
//   this.sayHi = function() {
//     alert( "Меня зовут: " + this.name );
//   };
// }
// let john = new User("John");
// john.sayHi(); // Меня зовут: John

// разьястнение вышепроисходящего
// /*
// john = {
//    name: "John",
//    sayHi: function() { ... }
// }
// */
// Итого:
// Функции-конструкторы или просто конструкторы, являются обычными функциями,
// но существует общепринятое соглашение именовать их с заглавной буквы.
// Функции-конструкторы следует вызывать только с помощью new.
// Такой вызов подразумевает создание пустого this в начале и возврат заполненного в конце.

/*
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
*/
// function Calculator() {
//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
//   this.sum = function() {
//     return this.a + this.b;
//   };
//   this.mul = function() {
//     return this.a * this.b;
//   }
// }
// let calculator = new Calculator();
// calculator.read()
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// ещё раз калькулятор, но с начальным значением
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        let num = +prompt("сколько добавляем?");
        return this.value += num;
    }
}
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);

// ещё раз THIS
// function hello() {
//     console.log("Hello", this);
//   }
//   const person = {
//     name: "Semen",
//     age: 35,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function (job, phone) {
//       console.group(`${this.name} info:`) //не обязательно но очень крутая штука если хочешь добавить
//       // заголовок свойств обьекта
//       console.log(`Name is ${this.name}`);
//       console.log(`Age is ${this.age}`);
//       console.log(`Job is ${job}`); //сделано без this, потому что указали в параметр
//       console.log(`Phone is ${phone}`); //сделано без this, потому что указали в параметр
//       console.groupEnd()
//       // теперь с помощью метода bind() 2 способа строка 294 - 295, 297 - второй способ, 298 call, 299 apply
//     }
//   };

//   const lena = {
//     name: 'Elena',
//     age: 23,
//   }
// Name is Elena
// Age is 23
//обращение к обьекту person, потому что у lena нету logInfo

// метод bind возвращает новую функцию которая привязала себе новый контекст
// const fnInfoLenaLog = person.logInfo.bind(lena, "FrontEnd", '345-123-345')
// fnInfoLenaLog()

// person.logInfo.bind(lena, "FrontEnd", '345-123-345')() //bind() всегда вызываем как функцию
// person.logInfo.call(lena, "FrontEnd", '345-123-345') // call вызывать как функцию не надо, в него передаётся бесконечное число параметров
// person.logInfo.apply(lena, ["FrontEnd", '345-123-345']) // apply вызывать как функцию не надо, в него передаётся 2 параметра
///////// ______________________
// Старый вариант умножения элементов массива
// const array = [1,2,3,4,5]
// function mult(arr, n) {
//   return arr.map(function(i) {
//     return i * n
//   })
// }
// console.log(mult(array, 15))

// Новый вариант через this
// const array = [1,2,3,4,5];
// Array.prototype.mult = function(n) {
//   return this.map(function(i) {
//     return i * n
//   })
// }
// console.log(array.mult(2))