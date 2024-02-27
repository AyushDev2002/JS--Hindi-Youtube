// const tinderUser = new Object() 

const tinderUser = {}        // also a way to represent object

tinderUser.id = "123abc" 
tinderUser.name = "Ayush"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "Ayush.at7@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aayu",
            lastname: "Tomar",
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2)    // {} stores all value after it inside {}

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {},{},{}
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

// {
//     name: "Ayush",
//     coursename:  "JS in Hindi",
//     price: "free"
// }                                            // json file



