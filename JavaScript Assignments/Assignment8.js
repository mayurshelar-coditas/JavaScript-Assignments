function getLengthOfMissingArray(arrayOfArrays) {
  if(!Array.isArray(arrayOfArrays) || arrayOfArrays === null || arrayOfArrays.length === 0){
    return 0;
  }
  if (arrayOfArrays.some(arr => arr === null || arr === undefined)) {
    return 0;
  }
  arrayOfArrays.sort(myFunction = (a,b) => a.length - b.length);
  for(let index=0; index < arrayOfArrays.length-1; index++){
    let nestedArray1 = arrayOfArrays[index];
    let nestedArray2 = arrayOfArrays[index+1];
    if(nestedArray1.length === 0 || nestedArray2.length === 0){
      return 0;
    }
    if(parseInt(nestedArray1.length) !== parseInt(nestedArray2.length-1)){
      return nestedArray1.length+1;
    }
  }
  return 0;
}
