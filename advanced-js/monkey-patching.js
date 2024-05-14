function printName(name) {
    console.log('printName :>> ', name);
}
printName('Prasad')

// Monkey patched the object and added a new property
printName.printAge = function (age) {
    console.log('printAge :>> ', age);
}
printName.printAge(22)

// We can also override the exiting impleementation
// Example of overrding a function of the DOM Element 

// This piece of the code will not run in the Node here as it is the part of the webapis
// which are provided by the Browser itself
// window.alert = function() {
//     throw new Error("XSS prevented");
// }


