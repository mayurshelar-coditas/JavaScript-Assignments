//Assignment - To make a custom reduce, map, filter.
const studentsPhysicsExamScore = [56, 45, 49, 32, 67];

//reduce
const reduce = (arrayToReduce, sumOfStudentScoresInPhysicsExam, initialValue) => {
    let accumulatedValue = 0, score = 0;

   initialValue === undefined ? accumulatedValue += arrayToReduce[score++] : accumulatedValue = initialValue;

    for(score; score<arrayToReduce.length; score++){
        accumulatedValue = sumOfStudentScoresInPhysicsExam(accumulatedValue, arrayToReduce[score]);
    }

    return accumulatedValue;

}

const sumOfPhysicsExamScore = reduce(studentsPhysicsExamScore, (accumulator, currentValue) => accumulator += currentValue, 0);

console.log(`Sum of students' physics exam scores: ${sumOfPhysicsExamScore}`);

//Filter
const filter = (arrayToFilter, filterPassedStudents) => {
    const filterdArray = [];
    for(const element of arrayToFilter){
        if(filterPassedStudents(element))
            filterdArray.push(element);
    }
    return filterdArray;
}

const studentsPassedInPhysicsExam = filter(studentsPhysicsExamScore, (score) => score >= 35 ? true : false);

console.log(`Scores of students' passed in physics exam: ${studentsPassedInPhysicsExam}`);

//Map
const map = (arrayToModify, increaseStudentsPhysicsScore) => {
    const modifiedArray = [];
    for(const element of arrayToModify){
        modifiedArray.push(increaseStudentsPhysicsScore(element));
    }
    return modifiedArray;
}


const studentsUpdatedPhysicsExamScore = map(studentsPhysicsExamScore, (score) => score += 10);

console.log(`Updated physics exam scores of students': ${studentsUpdatedPhysicsExamScore}`);