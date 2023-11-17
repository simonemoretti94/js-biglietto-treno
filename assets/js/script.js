//script

// const x = prompt("glad to see you again, please write a number"); 

// console.log("elaborating an output, pls wait...");

// let output;

// if (x > 4) {
//     output = `your number ${x}  is greater than four.`;
// }
// else if (x < 4) {
//     output = `your number ${x} is lower than four.`;
// }
// else {
//     output = `your number ${x} is exactly what i was looking for.`;
// }

// console.log(output);

// let avviso;

// const nome = prompt('inserisci il tuo nome');

// if (nome.length < 6) {
//     alert('non sei simone');
// }
// else if (nome.length > 6) {
//     alert('non sei simone');
// }
// else {

//     alert(`quindi sei ${nome}`);
//     avviso =`sei ${nome}`;

    

//     if (avviso == 'sei simone') {
//         console.log('benvenuto');
//     }
//     else {
//         console.log('acesso negato');
//     }
// }


// asking n kilometers
const km = prompt('please write below the amount of km you\'re gonna grind :)');

// asking a age
const age = prompt('then, please write below your age');

// information for travellers
alert("hi, i'm here just to help and let you know some infos: 1 - you're paying 0.21€ each km. 2 - 20% discount is applied on teen below 18 years old 3 - 40% discount is applied on elderly over 65 years old.");

let price;
let tot_price;

price = km * 0.21;

//output price without discounts
console.log(`${price}€`);

//getting td km
const kmtd =document.getElementById('km');

//writing on td km
kmtd.innerText = `${km}`;

//getting td age
const agetd = document.getElementById('age');

//writing on td age
agetd.innerText = `${age}`;

// checking for discount rights

