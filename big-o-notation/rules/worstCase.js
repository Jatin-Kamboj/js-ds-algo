const everyone = ["jatin", "rohit", "ramu", "bihari", "sam", "sanjeev","nemo"];
const nemo = "nemo";

function findNemo(input) {
  if (!input) return;

  // Breaking the loop once the result is found is good practice. As it will
  // ignore the unwanted iterations after the result have been found
  for (let i = 0; i <= input.length; i++) {
    if (input[i] === nemo) {
      console.log("Nemo found");
      break
    }else{
      console.log("Not found ");
    }
  }
}


// This function has Big O(n) Linear time complexity
findNemo(everyone)


/**
|--------------------------------------------------
| Notes (WORST CASE)
| Over here we consider the worst case scenario
| Which is if the (nemo) is at last position in the array
| Then our algo will iterate over all the elements which will make it as a O(n)
| Linear time complexity
|--------------------------------------------------
*/

