// ASSIGNMENT-2

const constants = [2.72, 3.14, 9.81, 37, 100]
// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [finland, estonia, sweden, denmark, norway] = countries;

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
// Destructure the rectangle object by its properties or keys.
const {width, height, area, perimeter} = rectangle;   

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
// Iterate through the users array and get all the keys of the object using destructuring
// Find the persons who have less than two skills
const personWithAtMostOneSkill = [];
for(const user of users){
    const {name, scores, skills, age} = user
    if(skills.length < 2){
        personWithAtMostOneSkill.push(user);
    }
    console.log(name, scores, skills, age);
}
console.log(personWithAtMostOneSkill);

const countriesDetails = [
  {
    name: "USA",
    capital: "Washington, D.C.",
    population: 302651,
    languages: ["English"]
  },
  {
    name:"Japan",
    capital: "Tokyo",
    population: 126461,
    languages: ["Japanese"]
  },
  {
    name: "France",
    capital: "Paris",
    population: 73511,
    languages: ["French"]
  }, 
  {
    name:"India",
    capital: "New Delhi",
    population: 140273515454,
    languages: ["Hindi", "Tamil", "Marathi"]
  }
]
// Destructure the countries array print name, capital, population and languages of all countries
for(const {name, capital, population, languages} of countriesDetails){
  console.log(`Name: ${name}`);
  console.log(`Capital: ${capital}`);
  console.log(`Population: ${population}`);
  console.log(`languages: ${languages}`);
}

// 7. Destructure the following array name to name, skills array to skills, scores array to scores, 
//    JavaScript score to jsScore and React score to reactScore variable in one line.
  const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
  const [name, skills, score] = student;
  const [, ,jsScore, reactScore] = score;
  console.log(name, skills, jsScore, reactScore);

// 8. Write a function called convertArrayToObject which can convert the array to a structure object.
    const students = [
        ['David', ['HTML', 'CSS', 'JS', 'Node'], [98, 85, 90, 95]],
        ['John', ['HTML', 'CSS', 'JS', 'Node'], [85, 80, 85, 80]]
      ]

    function convertArrayToObject(students){
        for(const student in students){
            const[name, skills, scores] = students[student];

            students[student] = {name, skills, scores};
        }
        return students;
      }

    console.log(convertArrayToObject(students))
//     [
//       {
//         name: 'David',
//         skills: ['HTML','CSS','JS','Node'],
//         scores: [98,85,90,95]
//       },
//       {
//         name: 'John',
//         skills: ['HTML','CSS','JS','Node'],
//         scores: [85, 80,85,80]
//       }
//     ]

// 9. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
    const studentObject = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }

    const {skills : studentSkills} = studentObject;

    const newStudent = {
        ...studentObject,
        skills: {
            frontEnd: [
                {skill: 'Bootstrap', level: 8},
                ...studentSkills['frontEnd'],
            ],
            backEnd: [
                {skill: 'Express', level: 9},
                ...studentSkills['backEnd']
            ],
            dataBase: [
                {skill: 'SQL', level: 8},
                ...studentSkills['dataBase']
            ], 
            dataScience: [
                'SQL', 
                ...studentSkills['dataBase']
            ]
        }
    }
    console.log(newStudent);
// output should look like this:
//     {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }
