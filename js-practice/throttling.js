window.onload = init

function init(event) {
    const inpurFieldEl = document.getElementById(
        "search-input"
    )

    var timeoutRef = null
    function debounce(event) {

        if (timeoutRef) {
            clearTimeout(timeoutRef)
        }

        timeoutRef = setTimeout(() => {
            timeoutRef = null
            callAPI(event.target.value)
        }, 100);
    }

    function callAPI(value) {
        console.log("APi called with this value:>> ", value);
    }

    inpurFieldEl.addEventListener("input", debounce)



    // Apply and call functions

    const student = {
        firstname: "Jatin",
        lastname: "Kamboj",
        printFullname(){
            const fullname = `${this.firstname} ${this.lastname}`
            console.log('fullname is :>> ', fullname);
        }
    }

    student.printFullname()

    const student2 = {
        firstname:"Ramu",
        lastname:"Yadav"
    }

    student.printFullname.apply(student2)



   try {
    console.log("Jatin :>>");
     const outerFunction=()=>{
         let counter = 0
 
         return () => {
             counter++
             console.log("Counter :>>",counter);
         }
     }
     const counter = outerFunction()
     counter()
     counter()
     counter()
     counter()

    //  /d/testing/.ssh/.id_rsa.pub
    // Temporal deadzone
    //  console.log("Temporarl variable ",myName);
    //  let myName
debugger
    myBestMeal()
     var myBestMeal = function () {
        console.log(bestFood);
        let bestFood = "Vegetable Fried Rice";
      };
   } catch (error) {
    console.log('error :>> ', error);
   }
}

