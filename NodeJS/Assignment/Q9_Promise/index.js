// Q9. Write a program that connect Mysql database, Insert a record in employee table and display all records in employee table using promise based approach.
const mysql = require('nodejs-mysql').default;
const readline = require("readline");

const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejspromise",
};

const db = mysql.getInstance(config);

async function getInput(prompt) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question(prompt, (input) => {
            rl.close();
            resolve(input);
        });
    });
}

async function main() {
    try {
        console.log("Connected!\n");
        
        console.log("\n ------: DATA :------")
        const result = await db.exec("SELECT * FROM employee");
        console.log("EmpID\tName\tDept\tSalary");
        for (var i in result) {
            console.log(`\n${result[i].EmpID}\t${result[i].EmpName}\t${result[i].Department}\t${result[i].Salary}\n`);
        }

        const name = await getInput("Enter Name: ");
        const dept = await getInput("Enter Department: ");
        const salary = await getInput("Enter Salary: ");

        var sql = `INSERT INTO employee(EmpName,Department,Salary) VALUES('${name}','${dept}','${salary}')`;
        await db.exec(sql);
        
        console.log("\n ------: DATA :------")
        const result1 = await db.exec("SELECT * FROM employee");
        for (var i in result1) {
            console.log(`\nEmpID : ${result1[i].EmpID} \tName : ${result1[i].EmpName} \tDepartment : ${result1[i].Department} \tSalary : ${result1[i].Salary}\n`);
        }
        process.exit(0);
    } catch (err) {
        console.error("Error:", err);
        process.exit(1);
    }
}

db.connect()
    .then(main)
    .catch((err) => {
        console.error("Error connecting to the database:", err);
        process.exit(1);
    });