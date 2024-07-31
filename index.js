#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Define the quiz questions and their correct answers
const questions = [
    {
        question: 'What is the national animal of Pakistan?',
        choices: ['Markhor', 'Tiger', 'Lion', 'Bald Eagle'],
        correctAnswer: 'Markhor'
    },
    {
        question: 'What is the capital city of United Kingdom?',
        choices: ['Edinburgh', 'Cardiff', 'London', 'Belfast'],
        correctAnswer: 'London'
    },
    {
        question: 'What is the smallest planet in our solar system?',
        choices: ['Earth', 'Mars', 'Mercury', 'Saturn'],
        correctAnswer: 'Mercury'
    },
    {
        question: 'Which city is known as the "City of Lights" in Pakistan?',
        choices: ['Lahore', 'Islamabad', 'Karachi', 'Multan'],
        correctAnswer: 'Karachi'
    },
    {
        question: 'What is the smallest prime number?',
        choices: ['0', '1', '2', '3'],
        correctAnswer: '2'
    },
    {
        question: 'What is the largest desert in the world?',
        choices: ['Sahara', 'Gobi Desert', 'Kalahari Desert', 'Patagonian'],
        correctAnswer: 'Sahara'
    },
    {
        question: 'Quaid e Azam was born in?',
        choices: ['1947', '1876', '1940', '1918'],
        correctAnswer: '1876'
    },
    {
        question: 'Which is the highest peak in Pakistan?',
        choices: ['Nanga Parbat', 'K2', 'Broad Peak', 'Gasherbrum I'],
        correctAnswer: 'K2'
    },
];
// Asks the quiz questions to the user and evaluates their responses.
async function askQuestions() {
    let correctAnswers = 0;
    let wrongAnswers = 0;
    // Loop through each question in the questions array
    for (const q of questions) {
        // Prompt the user with the current question and choices
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'response',
                message: q.question,
                choices: q.choices
            }
        ]);
        // Check if the user's answer matches the correct answer
        if (answer.response === q.correctAnswer) {
            console.log(chalk.green.bold(`✔ Correct\n`));
            correctAnswers++; // Increment the score for a correct answer
        }
        else {
            console.log(`${chalk.bold.redBright("✘ Wrong!")} The correct answer is "${chalk.bold.green(q.correctAnswer)}".\n`);
            wrongAnswers++;
        }
    }
    // Display the user's final score
    console.log("-".repeat(31));
    console.log(chalk.bold.blue(`\tFinal Score:`));
    console.log("-".repeat(31));
    console.log(chalk.bold(`${chalk.green(`Correct Answers: ${correctAnswers}`)}\n${chalk.red(`Wrong Answers: ${wrongAnswers}`)}\n${chalk.yellowBright(`Total Questions: ${questions.length}`)}`));
    console.log("-".repeat(31));
}
// Start the quiz
askQuestions();
