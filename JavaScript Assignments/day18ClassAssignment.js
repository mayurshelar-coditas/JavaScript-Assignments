const increment = (number) => {
    return () => ++number;
}

const result1 = increment(5);
const result2 = increment(10);


console.log(result1());
console.log(result2());
console.log(result1());
console.log(result2());


