//As variable fullName is declared using const we cannot change it's value once assigned.
const fullName = "Mayur Shelar"; //immutable variable;

//Position variable's value can be changed because we are using let for variable declaration.
let position = "Associate Software Engineer"; //mutable variable;

{
    //As variables declared using var have a global scope, we can access company name outside this block!.
    var companyName = "XYZ"; //mutable variable;
}

const displayDetails = () => {
    //Reassigning a different value to the position variable.
    position = 'Software Engineer'; 

    console.log(`Name: ${fullName} \nRole: ${position} \nCompany: ${companyName}.\n`);
}

displayDetails()

//Changing the value of companyName;
companyName = "ABC"; 
 
displayDetails();