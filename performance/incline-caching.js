function printUserName(user) {
    console.log(`${user.firstName} ${user.lastName}`);
}


const user = {
    firstName: "Jatin",
    lastName: "Kamboj"
}

for (let i = 0; i < 100; i++) {
    printUserName(user)
}