var {parent: {dad: {name: dadName, age: dadAge}}} = {
  name: 'Bob', age: 22,
  parent: {
    dad: {
      name: 'Bill',
      age: 70
    }
  }
}
console.log(dadName, dadAge)
