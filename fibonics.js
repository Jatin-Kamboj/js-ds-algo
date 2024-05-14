function fibonic(n) {
    // 0,1
    if (n<=1) {
        return n
    }
    return  fibonic(n - 1) + fibonic(n - 2)
}

console.log('fibonic(30) :>> ', fibonic(20));

function febonics2(n){
    if (n<=1) {
        return n
    }

    return febonics2(n-1) + febonics2(n-2)
}


console.log('febonics2() :>> ', febonics2(20));