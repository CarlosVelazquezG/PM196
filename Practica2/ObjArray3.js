const persona = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "María", edad: 28}
]

// find luis
const luigi = persona.find(persona => persona.nombre === "Luis");
console.log(luigi);
console.log("------")

// foreach
persona.forEach(persona => {
  console.log(`${persona.nombre} tiene ${persona.edad} años`);
});
console.log("------")

// reduce
const sumEdad = persona.reduce((acum, p) => acum + p.edad, 0);
console.log(`La suma de las edades es: ${sumEdad}`);