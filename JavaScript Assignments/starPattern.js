let n = 5;
for(let lines = 1; lines <= n; lines++){
    let pattern = "";
    for(let spaces = 1; spaces <= n-lines; spaces++){
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
for(let lines = n-1; lines > 0; lines--){
    let pattern = "";
    for(let spaces = 1; spaces <= n-lines; spaces++){
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