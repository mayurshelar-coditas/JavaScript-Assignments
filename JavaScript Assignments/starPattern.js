let diamondHeight = 5;
for(let lines = 1; lines <= diamondHeight; lines++){
    let pattern = "";
    for(let spaces = 1; spaces <= diamondHeight-lines; spaces++){
        pattern+=" ";
    }

    if(lines === 1){
        pattern+="*";
    }
    else{
        pattern+="*";
        for(let spaces=1; spaces<2*lines-2; spaces++){
            pattern+=" ";
        }
        pattern+="*";
    }
    console.log(pattern);

}
for(let lines = diamondHeight -1; lines > 0; lines--){
    let pattern = "";
    for(let spaces = 1; spaces <= diamondHeight-lines; spaces++){
        pattern+=" ";
    }

    if(lines === 1){
        pattern+="*";
    }else{
        pattern+="*";
        for(let spaces=1; spaces<2*lines-2; spaces++){
            pattern+=" ";
        }
        pattern+="*";
    }
    console.log(pattern);

}