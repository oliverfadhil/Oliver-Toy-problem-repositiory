const grade = document.getElementById("marks");
const form = document.getElementById("marks-form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const input = e.target.marks
    result(input.value)
    form.reset()
   
})

function result(marks) {
  if (marks >79) {
    console.log("A");
  } else if (marks>60 && marks<=79) {
    console.log("B");
  } else if (marks >49 && marks<= 59) {
    console.log("C");
  } else if (marks >= 40 && marks<= 49) {
    console.log("D");
  } else {console.log("E");
  }
}