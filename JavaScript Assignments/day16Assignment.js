//Assignment - To make a custom reduce, map, filter.
const studentsPhysicsExamScore = [56, 45, 49, 32, 67];

//reduce
const reduce = (arrayToReduce, callBackFunction, initialValue) => {
    let accumulatedValue = 0, score = 0;

   initialValue === undefined ? accumulatedValue += arrayToReduce[score++] : accumulatedValue = initialValue;

    for(score; score<arrayToReduce.length; score++){
        accumulatedValue = sumOfStudentScoresInPhysicsExam(accumulatedValue, arrayToReduce[score]);
    }

    return accumulatedValue;

}

const sumOfStudentScoresInPhysicsExam = (accumulator, currentValue) => accumulator += currentValue;

const sumOfPhysicsExamScore = reduce(studentsPhysicsExamScore, sumOfStudentScoresInPhysicsExam, 0);

console.log(`Sum of students' physics exam scores: ${sumOfPhysicsExamScore}`);

//Filter
const filter = (arrayToFilter, callBackFunction) => {
    const filterdArray = [];
    for(const element of arrayToFilter){
        if(callBackFunction(element))
            filterdArray.push(element);
    }
    return filterdArray;
}

const filterPassedStudents = (score) => score >= 35 ? true : false;

const studentsPassedInPhysicsExam = filter(studentsPhysicsExamScore, filterPassedStudents);

console.log(`Scores of students' passed in physics exam: ${studentsPassedInPhysicsExam}`);

//Map
const map = (arrayToModify, callBackFunction) => {
    const modifiedArray = [];
    for(const element of arrayToModify){
        modifiedArray.push(callBackFunction(element));
    }
    return modifiedArray;
}

const increaseStudentsPhysicsScore = (score) => score += 10;

const studentsUpdatedPhysicsExamScore = map(studentsPhysicsExamScore, increaseStudentsPhysicsScore);

console.log(`Updated physics exam scores of students': ${studentsUpdatedPhysicsExamScore}`);