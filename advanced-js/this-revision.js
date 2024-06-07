const window = {}

const animal = {
    name: "Lion",
    printLion: function () {
        // Here helloLion function is pointing to the printLion function because 
        // printLion function (Object) is calling the helloLion function
        // Therefore the this points to the object which is calling that function 
        // In Arrow it is different this points to where it is defined
        const helloLion = function() {
            console.log('helloLion :>> ', this.name);
        }
        console.log('this.lion :>> ', this.name);
        helloLion()
    }
    // }.bind(window)
}

animal.printLion()