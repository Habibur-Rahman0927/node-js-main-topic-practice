// console.log("process");
// console.log(process.argv);
// function grabValue(key){
//     const index = process.argv.indexOf(key);
//     return index !== -1 ? process.argv[index+1]:null; 
// }

// const firstName = grabValue('--firstName');
// const lastName = grabValue('--lastName');
// if(!firstName || !lastName){
//     console.log('please provide necessary information');
// }
// else{
//     console.log(`you are ${firstName}  ${lastName}`);
// }
// console.log(firstName, lastName);

// process.stdout.write('Hello');
// process.stdout.write(' world');
// process.stdin.on('data', (data) =>{
//     if(data.toString().trim().toLowerCase() === 'exit'){
//         process.exit();
//     }
//     else{
//         console.log(data.toString());

//     }
// });


// process.on('exit', () =>{
//     console.log('your are exiting');
// })


const questions = [
    "what is your name?\n",
    "How old are your?"
];
const answers = [];

process.stdout.write(questions[0]);
process.stdin.on('data', data =>{
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        process.stdout.write(questions[answers.length]);
    }
    else{
        process.exit();
    }
    console.log(data.toString());
})


process.on('exit', () =>{
    console.log('your are exiting');
    console.log(answers)
})