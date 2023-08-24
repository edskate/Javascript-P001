const  testArrow = () => console.log("Isso é uma função");

testArrow();

// truthy e falsy
const minhaVariavel1 = ""; // falsy
const minhaVariavel2 = "Algum texto"

if (minhaVariavel1) {
    console.log("É verdadeiro!");
} else {
    console.log("E falso!");
}

if (minhaVariavel1) {
    console.log("É verdadeiro! 2");
} else {
    console.log("E falso! 2");
}

// array, listas

const numeros = [1, 2, 3, 4, 5];

console.log(numeros);

console.log(numeros[0]);


console.log(numeros[2]);

numeros.push(6);

console.log(numeros);


// prototype => OBJECT -> OBJECT 2
// array => nosso arrays

numeros.pop();

console.log(numeros);
