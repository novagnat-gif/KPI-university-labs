function fn() {
  const object1 = { name: 'Ihor' }
  let object2 = { name: 'Petya' }

  console.log(object1.name)
  console.log(object2.name)

  object1.name = "Ya ne Ihor"
  object2.name = "Ya ne Petya"

  console.log(object1.name)
  console.log(object2.name)

  object2 = { name: "Dmitro" }
  console.log(object2.name)
}

function createUser(name, city) {
    let object = { name: name, city: city}
    return object
}

console.log(createUser("Marcus Aurelius", "Roma"))
