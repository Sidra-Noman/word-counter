#! /usr/bin/env node
import inquirer from "inquirer";

// Declare a constant 'answer' and assign it to the result of inquirer.prompt function
const answers :{
   Sentence :string
 } = await inquirer.prompt([
    {
        name:"Sentence",
        type:"input",
        message:"Enter Your Sentence to count the words:"
    }


 ])
//  to remove white spaces 
 const words = answers.Sentence.trim().split(" ")
 
//  Print the array of words to the console
console.log(words)

// Print the word count of the sentence to the console
console.log(`Your word count is ${words.length}`);