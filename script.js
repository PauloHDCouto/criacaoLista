let list =[]

const Paulo = {
  name: "Paulo",
  idade: 37,
  weigth: 89,
  heigth: 182  
}

const Ronaldo = {
  name: "Ronaldo",
  idade: 47,
  weigth: 120,
  heigth: 170  
}

const Yan = {
  name: "Yan",
  idade: 25,
  weigth: 69,
  heigth: 178  
}

const Renan = {
  name: "Renan",
  idade: 27,
  weigth: 78,
  heigth: 182  
}

list.push(Paulo,Renan,Yan,Ronaldo)
console.log(list)

const pacients =[]

for(let pacient of list) {
  pacients.push(pacient.name)
}

console.log(pacients)