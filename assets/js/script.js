//script

// asking n kilometers
const km = prompt('please write below the amount of km you\'re gonna grind :)');

// asking a age
const age = prompt('then, please write below your age');

// information for travellers
alert("hi, i'm here just to help and let you know some infos:   1 - you're paying 0.21€ each km.    2 - 20% discount is applied on teen below 18 years old  3 - 40% discount is applied on elderly over 65 years old.");

let price;


price = (km * 0.21).toFixed(2);

//output price without discounts
console.log(`without discounts ${price} €`);

//getting td km
const kmtd =document.getElementById('km');

//writing on td km
kmtd.innerText = `${km}`;

//getting td age
const agetd = document.getElementById('age');

//writing on td age
agetd.innerText = `${age}`;

// checking for discount rights
let y;
let n;
let temp_price;
let tot_price;

if (age < 18) {
    console.log('I\'m talking to a young chick.');
    y =  document.getElementById('20yn');
    y.innerText = `yes`
    n =  document.getElementById('40yn');
    n.innerText = `-`;
    tot_price = (price * 0.8).toFixed(2);
    console.log(tot_price);
    temp_price = document.getElementById('output');
    temp_price.innerText = `tot in euros: ${tot_price}`;

}
else if (age > 65) {
    console.log('I\'m talking to a skilled bro.');
    y =  document.getElementById('20yn');
    y.innerText = `-`
    n =  document.getElementById('40yn');
    n.innerText = `yes`;
    tot_price = (price * 0.6).toFixed(2);
    temp_price = document.getElementById('output');
    temp_price.innerText = `tot in euros: ${tot_price}`;
}
else {
    console.log('bruh you ain\'t any rights :( ');
    y =  document.getElementById('20yn');
    y.innerText = `-`
    n =  document.getElementById('40yn');
    n.innerText = `-`;
    temp_price = document.getElementById('output');
    temp_price.innerText = `tot in euros: ${price}`;
}

alert('have a nice trip. enjoy!');

document.querySelector('td#output').addEventListener('mouseenter', function (){
    document.querySelector('td#output').style.color = 'red';
})

document.querySelector('td#output').addEventListener('mouseout', function (){
    document.querySelector('td#output').style.color = 'blue';
})

// document.querySelector('td#output').style.color = 'red';

document.querySelector('td#output').addEventListener('mouseenter', function () {
    alert('Prezzo fissato!')
})

console.log(document.querySelector('div.container').classList)


