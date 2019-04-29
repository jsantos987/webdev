const sayHello = function() {
    console.log('Hello');
}
sayHello();


const sayHello1 = () => {
    console.log('Hello1');
}
sayHello1();

const sayHello2 = () => console.log('Hello2');
sayHello2();


const sayHello3 = () => 'Hello3';
console.log(sayHello3());


const sayHello4 = function() {
    return 'Hello4';
}
console.log(sayHello4());


// Return a object - you need wrarp 'Hello5'
const sayHello5 = () => ({ msg: 'Hello5' })
console.log(sayHello5());


// Return object with parameters. One parameter does not require 
const sayHello6 = (firstName, lastName) => console.log(`Hello6 ${firstName} ${lastName}`);
sayHello6('John', 'Santos');


//=================================================================
// Callback used to take array and return map. Example list of users 
// and returning length of names.
const users = ['John', 'Alfred', 'Anthony'];

// Short method
const nameLengths = users.map(function(name) {
    return name.length;
});
console.log(nameLengths);

// Shorter method using  a arrow function.
const nameLengths1 = users.map((name) => {
    return name.length;
});
console.log(nameLengths1);
