const marks = parseInt(prompt("Enter student marks"))
// toggles a window that prompts the user to input the marks that they would like to be calculated
function grade(){if(marks>79){'A'}if (marks<79&&marks>60){'b'}if(marks<=59&&marks>49){'C'}if(marks<49&&marks>40){'D'}else if(marks<40){'E'}};