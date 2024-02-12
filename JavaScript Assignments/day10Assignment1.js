// Day-13 Assignment

// Create an empty object called cow
const cow = {};

// Print the the cow object on the console
console.log(cow);

// Add name, legs, color, age and sound properties for the cow object. The sound property is a method which return "maaah maaah"
cow["name"] = "humped cattle";
cow["legs"] = 4;
cow["color"] = "brown";
cow["age"] = "7 years";
cow["sound"] = () => {
    return "maaah maaah";
}

// Get name, legs, color, age and sound value from the cow object
const {name, legs , color, age, sound} = cow;

// Set new properties the cow object: breed, getCowInfo()
cow["breed"] = "Red Agnus";
const{breed} = cow;
cow["getCowInfo"] = () => {
    console.log(`Name: ${name}`);
    console.log(`Legs: ${legs}`);
    console.log(`Color: ${color}`);
    console.log(`age: ${age}`);
    console.log(`Cow says: ${sound()}`);
    console.log(`breed: ${breed}`);
}

const {getCowInfo} = cow;
getCowInfo();


// Dummy Data-1
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}


// Find the person who has many skills in the users object.
// Count logged in users, count users having greater than equal to 30 points from the following object.
// Find people who are MERN stack developer from the users object

let mostNumberOfSkills = Number.MIN_VALUE, 
userWithMaximumSkills,loggedInUsersCount=0, usersWithAtLeast30Points = 0
mernStackDevelopers = [];

for(const user in users){
    const{skills, isLoggedIn, points} = users[user];

    if(skills.length > mostNumberOfSkills){
        mostNumberOfSkills = skills.length;
        userWithMaximumSkills = user;
    }
    if(isLoggedIn){
        loggedInUsersCount++;
    }
    if(points >= 30){
        usersWithAtLeast30Points++;
    }
    if(skills.includes("MongoDB") && skills.includes("Express") && skills.includes("React") && skills.includes("Node")){
        mernStackDevelopers.push(user);
    }
}

console.log(`User with most number of skills is ${userWithMaximumSkills}`);

console.log(`Number of Users logged in: ${loggedInUsersCount}\nNumber of Users having atleast 30 points: ${usersWithAtLeast30Points}`);

console.log(`People having mern stack in their skillset: ${mernStackDevelopers}`);


// Set your name in the users object without modifying the original users object
const updatedUsers = {
  Mayur: {
    email: 'mayur.shelar@coditas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 21,
    isLoggedIn: true,
    points: 50
  },
  ...users
}
console.log(updatedUsers);
// Get all keys or properties of users object
console.log(Object.keys(users));

// Get all the values of users object
console.log(Object.values(users));

// Use the countries object to print a country name, capital, populations and languages.
const countries = {
  USA: {
    capital: "Washington, D.C.",
    population: 302651,
    languages: ["English"]
  },
  Japan: {
    capital: "Tokyo",
    population: 126461,
    languages: ["Japanese"]
  },
  France: {
    capital: "Paris",
    population: 73511,
    languages: ["French"]
  }, 
  India: {
    capital: "New Delhi",
    population: 140273515454,
    languages: ["Hindi", "Tamil", "Marathi"]
  }
}

const detailsOfCountries = Object.entries(countries); 
for(const country in countries){
  const {capital, population, languages} = countries[country];

  console.log(`Name: ${country}`);
  console.log(`population: ${population}`);
  console.log(`Languages: ${languages}`);
  console.log(`Capital: ${capital}`);
}

// Create an object called personAccount. 
// It has firstName, lastName, incomes, expenses properties 
// and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personalAccount = {
  firstName: "Mayur",
  lastName: "Shelar",
  incomes: [
    [11000, "Salary"],
    [12344, "House Rent"],
    [342235, "Sold Goods"]
  ], 
  expenses: [
    [5000, "Grocery"],
    [12344, "Shopping"],
    [3235, "Electricity Bill"]
  ], 
  totalIncome : () => {
    const {incomes} = personalAccount;
    let totalIncomeInRupees = 0;
    for(const income of incomes){
      totalIncomeInRupees += income[0];
    }

    return totalIncomeInRupees;
  },
  totalExpense : () => {
    const {expenses} = personalAccount;
    let totalExpenseInRupees = 0;
    for(const expense of expenses){
      totalExpenseInRupees += expense[0];
    }

    return totalExpenseInRupees;
  },
  accountInfo : () => {
     const {firstName, lastName, accountBalance } = personalAccount;
     console.log(`First Name: ${firstName}`);
     console.log(`Last Name: ${lastName}`);
     console.log(`Account Balance: ${accountBalance()}`);
  },
  addIncome : (income, description) => {
    const {incomes} = personalAccount;
    incomes.push([income, description]);
  },
  addExpense : (expense, description) => {
    const {expenses} = personalAccount;
    expenses.push([expense, description]);
  },
  accountBalance : () => {
    const {totalExpense, totalIncome} = personalAccount;
    return Math.abs((totalExpense() - totalIncome()));
  },
}

// Dummy Data-2
    const userProfiles = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

// Imagine you are getting the below users array of objects.
// Create a function called signUp which allows user to add to the collection. 
// If user exists, inform the user that he has already an account.
const signUp = function(userName, userEmail, userPassword){
  const userAlreadyExists = userProfiles.some(user => userEmail === user.email);

  if(userAlreadyExists){
    console.log("User Already exists!");
  } else {
    userProfiles.push(
      {
        _id : Math.round(Math.random()*1000),
        username : userName,
        email : userEmail,
        password : userPassword,
        createdAt: (new Date()).toString(),
        isLoggedIn: false
      }
    );
    console.log("User profile created successfully.")
  }
}

signUp("mayur", "mayur.shelar@coditas.com", "coditas@123");
// Create a function called signIn which allows user to sign in to the application
const signIn = function(userEmail, userPassword){
  const validUser = userProfiles.some(user => userEmail === user.email && userPassword === user.password);

  if(validUser){
    console.log("SignedIn successfully!");
  } else {
    console.log("Invalid credentials!");
  }
}
signIn("mayur.shelar@coditas.com", "coditas@123");


const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// The products array has three elements and each of them has six properties.
// Create a function called rateProduct which rates the product
const rateProduct = function(productId, userId, rating){
  const product = products.find((product) => {
    return product._id === productId;
  });

  if(product){
    const {ratings} = product;
    ratings.push({userId, rating});
  }
}

rateProduct('aegfal', 'mayur98585', 400);

console.log(products);

// Create a function called averageRating which calculate the average rating of a product
const averageRating = function(productId){
  const product = products.find((product) => {
    return product._id === productId;
  });

  if(product){
    let sumOfRating = 0;
    const {ratings} = product;
    for(const rating of ratings){
      const{rate} = rating;
      sumOfRating += rate;        
    }
     return sumOfRating / ratings.length;
  } 
}
console.log(averageRating('eedfcf'));

// Create a function called likeProduct. 
// This function will helps to like to the product if it is not liked and remove like if it was liked.
const likeProduct = function(productId, userId){
  const product = products.find((product) => {
    return product._id === productId;
  });

  if(product){
    const {likes} = product;
    if(likes.includes(userId)){
      const userIndex = likes.indexOf(userId);
      likes.splice(userIndex, 1);
    } else {
      likes.push(userId);
    } 
  } 
}

likeProduct('hedfcg', 'fg12cy');

console.log(products);

likeProduct('hedfcg', 'fg12cy');
likeProduct('hedfcg', 'fg12ce');


console.log(products);


