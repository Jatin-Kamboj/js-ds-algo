const array = [1,2,3,4]

// Let is block scoped
// therefore the i is scoped in here for every loop

// If we take the var then it will be changed globally as it is global scoped
for(let i = 0; i< array.length; i++){
    // const value = array[i]
    setTimeout(() => {
       console.log('setTimeout value :>> ', i); 
    }, 3000);
}