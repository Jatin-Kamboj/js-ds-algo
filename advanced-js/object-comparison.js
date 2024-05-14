var user1 = { name: "nerd", org: "dev" ,address:{hno:12}};
var user2 = { name: "nerd", org: "dev" ,address:{hno:121}};
const user3 = user1

// Over here they are checking the reference of both the objects
// The attributes values in the object are not being checked or compared
const isUser3EqualUser1 = user3 == user1
console.log('isUser3EqualUser1 :>> ', isUser3EqualUser1);

var eq = user1 === user2;
console.log('eq :>> ', eq); // false


// Deep cloning the object
const userShallowClone = Object.assign({}, user1)
// This will change the value of the parent object (user1)
userShallowClone.address.hno = 13
console.log('user1.address.hno :>> ', user1.address.hno);

// deep clone of the object

const deepCloneObject = JSON.parse(JSON.stringify(user2))
deepCloneObject.address.hno =15
console.log('user2.address.hno :>> ', user2.address.hno);



