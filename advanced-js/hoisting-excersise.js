// Exercise 4
function bigBrother() {
    function littleBrother() {
        return 'it is me!';
    }
    // return keyword is the part of the execution 
    return littleBrother();

    function littleBrother() {
        return 'no me!';
    }
}

console.log(bigBrother());