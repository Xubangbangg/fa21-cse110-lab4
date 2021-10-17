let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year' : '2022',
    greeting: function(){ console.log('Hello!');},
    'Favorite teacher': {
        name:'Thomas powell',
        course: 'cse 110'
    },
    courseload: ['cse110', 'cse134','vis41']
};

console.log(student.name);
console.log(student["Grad Year"]);
console.log(student.greeting);
console.log(student["Favorite teacher"].name);
console.log(student.courseload[0]);