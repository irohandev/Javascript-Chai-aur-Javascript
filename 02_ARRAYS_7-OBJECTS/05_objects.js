const course= {
    cname: 'Chai aur javascript',
    fee :'999',
    courseinstructor: 'Hitesh Bhaiya'
}

//console.log(course.courseinstructor);          //this is one way to print the req input from object

// another way - 

// const {courseinstructor} = course
//console.log(courseinstructor);


const {courseinstructor : instructor} = course;       // de structuring the object where courseinstructor key is now will be known as instructor
console.log(instructor);