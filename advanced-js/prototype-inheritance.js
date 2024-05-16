const myName = "Jatin Kamboj";

// If we print this in the browser it will print an object which will include all the 
// properties this string object has such as replace, split etc.
console.log('myName :>> ', myName.__proto__);

// Then add one more __proto__ with it. It will print all the properties of the (object)
// which is the parent from which the string have been created
// myName.__proto__.__proto__    [Prints the properties of the (object)]
console.log('myName :>> ', myName.__proto__.__proto__);
