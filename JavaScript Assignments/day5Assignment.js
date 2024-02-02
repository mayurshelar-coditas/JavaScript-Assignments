function feast(beast, dish) {
    //your function here
      let beastName = [beast[0], beast[beast.length-1]];
      let dishName = [dish[0], dish[dish.length-1]];
      if(dishName[0] === beastName[0] && beastName[1]=== dishName[1]){
        return true;
      } 
      
      return false;
    }

