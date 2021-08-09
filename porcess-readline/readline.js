const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

// rl.question("what is your name?", data =>{
//     console.log(data);
// })

const questions = [
    "what is your name?\n",
    "How old are your?"
];
const answers = [];

rl.question(questions[0], data => {
    answers.push(data.toString());
    if (answers.length < questions.length) {
        rl.setPrompt(questions[answers.length]);
        rl.prompt();
        rl.on('line', data => {
            if (data.trim().toLowerCase() === 'exit') {
                rl.close();
                return;
            }
            else {
                rl.setPrompt('what else you want to say (write Exit to leave)?');
                rl.prompt();
                answers.push(data);
            }
        })
    }

});

rl.on('close', ()=>{
    console.log(`your are exiting the app and your result is ${answers}`);
})