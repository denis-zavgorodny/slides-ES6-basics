// var citizen = Object.create({}, {
//   name: {
//     value: 'Bob',
//     enumerable: true
//   }
// })

// console.log(citizen)

// var citizen1 = Object.create({}, {
//   name: {
//     value: 'Bob'
//   }
// })

// console.log(citizen1)
// console.log(citizen1.name)

// function Citizen () {
//   this.name = 'Bob'
// }
// Citizen.prototype.age = 18

// var citizen = new Citizen()
// console.log(citizen)
// console.log(citizen.age)

// var human = {
//   head: 1,
//   neck: 1,
//   body: 1,
//   arm: 3,
//   leg: 2
// }
// var bob = {
//   gender: 'man',
//   name: 'Bob',
//   __proto__: human
// }
// human.arm = 10
// console.log(bob.arm)

// var simple = {
//   leg: 3
// }

// function Human () {
// }
// Human.prototype = simple
// var h = new Human()
// console.log(h.leg)

// var man = {
//   name: 'Bob',
//   get age() { return this._age + ' y.o.'; },
//   set age(value) { this._age = value; }
// }
// man.age = 10
// console.log(man.age)


// var man = {};
// Object.defineProperty(man, 'age', {
//     set: function(value) {
//         _age = value;
//     },
//     get: function() {
//         return _age;
//     }
// });
// man.age = 1;
// console.log(man.age);
