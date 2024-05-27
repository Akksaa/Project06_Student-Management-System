#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let programName = "<<<<<<<Student Management System>>>>>>>";
console.log(chalk.bgBlueBright(`\n`, programName, `\n`));

const fees : any = {

    JAVA : 1800,
    HTML  : 1000,
    CSS : 1200,
    Python : 2000,
    PHP : 2200,
    SQL : 2000
};

while (true) {

        let student = await inquirer.prompt([{

        name: "name",
        type: "input",
        message: "Kindly, Enter your Name first:",

     },
     {
        name: "age",
        type: "input",
        message: "Kindly, Enter your Age:"

    }]);

    let studentID = Math.floor(10000 + Math.random() * 40000);
    console.log(chalk.green(`Congratulations! ${student.name.toUpperCase()} \nYou have Enrolled and Your Student ID is ${studentID}.`));

    let isStudent = await inquirer.prompt([{

        name: "pinCode",
        type: "number",
        message: "Kindly Enter your Student ID for further Process:"

    }]);

    if (isStudent.pinCode === studentID) {
        console.log(chalk.green("You've logged in Succesfully!"));
    }
    else{
        console.log(chalk.red("Try again! Invalid Student ID."));
        break;
    };

    let select = await inquirer.prompt([{

        name: "course",
        type: "list",
        message: "Kindly select one of the following Programming Language Courses below:",
        choices: ["JAVA", "HTML" ,"CSS", "Python", "PHP", "SQL"]

    }]);

    let courseFee = fees[select.course];
    console.log(chalk.green(`The ${select.course} Course costs Rs.${courseFee}`));
    
    let feesPay = await inquirer.prompt([{
        name: "paymentType",
        type:"list",
        message: "Kindly, Select one of the following options for Payment:",
        choices: ["Payment in Cash", "EasyPaisa", "JazzCash", "Bank Transfer"]
    }]);

    let ask;
    let balance = 3000;
    if(feesPay.paymentType === "Payment in Cash"){
            ask = await inquirer.prompt([{
            name: "cash",
            type: "number",
            message: "How much amount do you want to pay?",
        }]);
        while(ask.cash !== courseFee){
            console.log(chalk.red("Try again! Insufficient Amount."))
                ask = await inquirer.prompt([{
                name : "cash",
                type: "number",
                message: "Kindly, Enter Sufficient Amount!"
            }]);
        
        };
        console.log(chalk.green(`${student.name}, You've paid Rs. ${ask.cash} for ${select.course} Course successfully!`));
        
    }
    else if (feesPay.paymentType === "EasyPaisa"){
        let easypaisaPin = await inquirer.prompt([{
            name: "pincode",
            type: "input",
            message: "Kindly, Enter your Pin Code to access your EasyPaisa Account:"
        }]);

        console.log(chalk.green(`${student.name}, You've logged in your EasyPaisa account! \nYour Balance is Rs.${balance}`));

        ask = await inquirer.prompt([{
            name: "cash",
            type: "number",
            message: "How much amount do you want to pay?",
        }]);
        while(ask.cash !== courseFee){
            console.log(chalk.red("Try again! Insufficient Amount."))
                ask = await inquirer.prompt([{
                name : "cash",
                type: "number",
                message: "Kindly, Enter Sufficient Amount!"
            }]);
        
        };
        console.log(chalk.green(`${student.name}, You've paid Rs. ${ask.cash} for ${select.course} Course successfully!`));
        
    }
    else if (feesPay.paymentType === "JazzCash"){
        let jazzcashPin = await inquirer.prompt([{
            name: "pincode",
            type: "input",
            message: "Kindly, Enter your Pin Code to access your JazzCash Account:"
        }]);

        console.log(chalk.green(`${student.name}, You've logged in your JazzCash account! \nYour Balance is Rs.${balance}`));

        ask = await inquirer.prompt([{
            name: "cash",
            type: "number",
            message: "How much amount do you want to pay?",
        }]);
        while(ask.cash !== courseFee){
            console.log(chalk.red("Try again! Insufficient Amount."));

            ask = await inquirer.prompt([{
                name : "cash",
                type: "number",
                message: "Kindly, Enter Sufficient Amount!"
            }]);
         console.log(chalk.green(`${student.name}, You've paid Rs. ${ask.cash} for ${select.course} Course successfully!`));
        
        };
    }
    else if(feesPay.paymentType === "Bank Transfer"){
        let bankAccPin = await inquirer.prompt([{
            name: "pincode",
            type: "input",
            message: "Kindly, Enter your Pin Code to access your Bank Account:"
        }]);

        console.log(chalk.green(`${student.name}, You've successfully accessed your Bank account! \nYour Balance is Rs.${balance}`));

        ask = await inquirer.prompt([{
            name: "cash",
            type: "number",
            message: "How much amount do you want to pay?",
        }]);
        while(ask.cash !== courseFee){
            console.log(chalk.red("Try again! Insufficient Amount."));

            ask = await inquirer.prompt([{
                name : "cash",
                type: "number",
                message: "Kindly, Enter Sufficient Amount!"
            }]);
        };

         console.log(chalk.green(`${student.name}, You've paid Rs.${ask.cash} for ${select.course} Course successfully!`));
        

    };
    if(feesPay.paymentType !== "Payment in Cash"){
        let viewBalance = await inquirer.prompt([{
            name: "remBalance",
            type:"confirm",
            message:"Do you want to check your Remaining Balance?"
        }]);

        if(viewBalance.remBalance == true){
            let remBalance = balance - courseFee;
            console.log(chalk.green(`${student.name}, Your remaining Balance is Rs.${remBalance}`));
        }
    };
    
    let viewStatus = await inquirer.prompt([{
        name: "studentStatus",
        type: "confirm",
        message: "Do you want to look into your Student Status?"
    }]);

    if (viewStatus.studentStatus == true){

        console.log(chalk.bgBlue("////// STUDENT STATUS //////"));
        console.log(chalk.green(`Student Name: ${student.name.toUpperCase()}`));
        console.log(chalk.green(`Student Age: ${student.age}`));
        console.log(chalk.green(`Student ID: ${studentID}`));
        console.log(chalk.green(`Course: ${select.course}`));
        console.log(chalk.green(`Course Fee: Rs.${courseFee}`));
        console.log(chalk.yellow(`Thanks For Joining, ${student.name}!`));
    }
    else{
    console.log(chalk.yellowBright(`Thank you ${student.name} for Visiting! `));
    };
    break;
};

