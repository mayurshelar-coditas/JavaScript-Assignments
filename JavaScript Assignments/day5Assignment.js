function feast(beast, dish) {
    //your function here
      let beastNameStartingAndEnding = [beast[0], beast[beast.length-1]];
      let dishNameStartingAndEnding = [dish[0], dish[dish.length-1]];
      if(beastNameStartingAndEnding[0] === dishNameStartingAndEnding[0] && beastNameStartingAndEnding[1]=== dishNameStartingAndEnding[1]){
        return true;
      } 
      
      return false;

    //Optimized Approach
    // if(beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]){
    //     return true;
    // } 
    // return false;
    }

