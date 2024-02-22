//Pattern

for(let row = 1; row <= 5; row++){
    let pattern = "";
    for(let column = 1; column <= row; column++){
        pattern+=column;
    }
    console.log(pattern);
}

//Pattern

for(let row = 5; row >= 1; row--){
    let pattern = "";
    for(let column = 1; column <= row; column++){
        pattern+=column;
    }
    console.log(pattern);
}

//Square hollow pattern
console.log();

patternHeight = 4;

for(let row = 1; row <= patternHeight; row++){
    let pattern = "";
    for(let column = 1; column <= patternHeight; column++){
        if(row ===  1|| column === 1 || row === patternHeight || column === patternHeight){
            pattern += "*";
        } else{
            pattern+=" ";
        }
    }
    
    console.log(pattern);
}

//Number triangle
// outer loop to handle number of rows
for (i = 1; i <= 6; i++) {
    pattern = "";
    // inner loop to print space
    for (j = 1; j <= 3; j++) {
        pattern += " ";
    }
    // inner loop to print star
    for (j = 1; j <= i; j++) {
        pattern += `${i} `;
    }
    // print new line for each row
    console.log(pattern);
}

console.log();
//0-1 triangle
for(let row = 0; row < 5; row++){
    let pattern = "";
    for(let column = 0; column < row; column++){
        (row + column) % 2 ? pattern += "1" : pattern += "0";
    }
    console.log(pattern);
}

console.log();
//Palindrome Triangle
for(let row = 1; row <= patternHeight; row++){
    let pattern = "";
    //first spaces 
    for(let spaces = 1; spaces<=patternHeight-row; spaces++){
        pattern += " ";
    } 
    for(let column=row; column>=1; column--){
        pattern += column;
    }
    for(let column=2; column<=row; column++){
        pattern += column;
    }
    console.log(pattern);
}

console.log();
//rhombus
for(let row = 1; row<=4; row++){
    let pattern="";
    //spaces
    for(let spaces=1; spaces<row; spaces++){
        pattern+=" ";
    }

    for(stars = 1; stars<=4; stars++){
        pattern+="*";
    }
    console.log(pattern);
}

console.log();

//Butterfly pattern

const butterflyHeight = 3;

for(let row=1; row<=butterflyHeight; row++){
    let pattern = "";
    //first stars
    for(stars=1; stars<=row; stars++){
        pattern+="*";
    }

    //spaces
    for(let spaces=1;spaces <= (butterflyHeight-row)*2; spaces++){
        pattern+= " ";
    }

    //last stars
    for(stars=1; stars<=row; stars++){
        pattern+="*";
    }
    console.log(pattern);
}
for(let row=butterflyHeight-1; row>=1; row--){
    let pattern = "";
    //first stars
    for(stars=1; stars<=row; stars++){
        pattern+="*";
    }

    //spaces
    for(let spaces=1;spaces <= (butterflyHeight-row)*2; spaces++){
        pattern+= " ";
    }

    //last stars
    for(stars=1; stars<=row; stars++){
        pattern+="*";
    }
    console.log(pattern);
}

//kite pattern

const kiteHeight = 4;

for(let row=kiteHeight; row>=1; row--){
    let pattern = "";
    for(let stars=1; stars<=row; stars++){
        pattern+="*";
    }
    console.log(pattern);
}
for(let row=2; row<=kiteHeight; row++){
    let pattern = "";
    for(let stars=1; stars<=row; stars++){
        pattern+="*";
    }
    console.log(pattern);
}
console.log();

//Hollow triangle pattern
const triangleHeight = 4;

for(let row=1; row<=triangleHeight; row++){
    let pattern = "";

    //first spaces
    for(let spaces=1; spaces <= triangleHeight-row; spaces++)
        pattern += " ";
    
    if(row === 1 || row === triangleHeight){
        for(let stars=1; stars<=row; stars++)
            pattern+="* ";
    }
    else {
        //outer border
        pattern += "*";

        //Inner spaces
        for(let spaces=1; spaces<=2*row-(triangleHeight-1); spaces++)
            pattern += " ";

        pattern += "*";    
    }
    console.log(pattern);
}
console.log();
//Hour glass
for(let row=triangleHeight; row>=1; row--){
    let pattern = "";

    //first spaces
    for(let spaces=1; spaces <= triangleHeight-row; spaces++)
        pattern += " ";
    
    if(row === 1 || row === triangleHeight){
        for(let stars=1; stars<=row; stars++)
            pattern+="* ";
    }
    else {
        //outer border
        pattern += "*";

        //Inner spaces
        for(let spaces=1; spaces<=2*row-(triangleHeight-1); spaces++)
            pattern += " ";

        pattern += "*";    
    }
    console.log(pattern);
}
for(let row=2; row<=triangleHeight; row++){
    let pattern = "";

    //first spaces
    for(let spaces=1; spaces <= triangleHeight-row; spaces++)
        pattern += " ";
    
    if(row === 1 || row === triangleHeight){
        for(let stars=1; stars<=row; stars++)
            pattern+="* ";
    }
    else {
        //outer border
        pattern += "*";

        //Inner spaces
        for(let spaces=1; spaces<=2*row-(triangleHeight-1); spaces++)
            pattern += " ";

        pattern += "*";    
    }
    console.log(pattern);
}

console.log()
//inverted number triangle 

for(let row=1; row<=4; row++){
    let pattern = "";
    //for printing spaces
    for(let spaces=1; spaces<row; spaces++)
        pattern += " ";

    //for numbers
    for(let number=row; number<=4; number++){
        pattern+= number+" ";
    }   

    console.log(pattern);
}

console.log();

//Mirror images triangle pattern 
for(let row=1; row<=4; row++){
    let pattern = "";
    //for printing spaces
    for(let spaces=1; spaces<row; spaces++)
        pattern += " ";

    //for numbers
    for(let number=row; number<=4; number++){
        pattern+= number+" ";
    }   

    console.log(pattern);
}
for(let row=3; row>=1; row--){
    let pattern = "";
    //for printing spaces
    for(let spaces=1; spaces<row; spaces++)
        pattern += " ";

    //for numbers
    for(let number=row; number<=4; number++){
        pattern+= number+" ";
    }   

    console.log(pattern);
}
console.log();

for(let row = 1; row<=patternHeight; row++){
    let pattern = "";

    //For spaces
    for(let spaces=1; spaces<=patternHeight-row; spaces++)
        pattern += " "; 

    if(row === 1)
    //To add a static 1
    pattern += "1 ";
 
    else{
        //to add the number
        pattern += "1 ";
        for(let column = 1; column < row - 1; column++)
            pattern += `${row-1} `;

        //to add a static 1 at end
            pattern += "1";
    }
    console.log(pattern);
}