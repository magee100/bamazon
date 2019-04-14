//////---ONGOING ISSUES----//////////
//--Display tables without RowDataPacket
//--Determine if item_id is valid
//--
//--
//--
//--
//////////////////////////////////////

// Require mysql and inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");

// Set connection to mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazonDB"
})

// Connect to mysql, display product results and start function
connection.connect(function(err) {
    if (err) throw err;

    //Select all customers and return the result object:

    // connection.query("SELECT [id], [item_id], [product_name], [department_name], [price], [stock_quantity] FROM products", function (err, result) {

    connection.query("SELECT * FROM products", function (err, result) {
      if (err) throw err;
      console.log(result);
       start();
    });
});


// Start function
// function start() {

// Display table with items in terminal


// Run inquirer prompts
//     inquirer
//         .prompt({
//             name: "checkID",
//             type: "input",
//             message: "What is the ID of the product? (EX:1156, 1589)"
//         })    
// .then(function(answer){
//     if (answer.checkID === item_id)
//     })
// }



// Start function
function start() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;

    inquirer
        .prompt([
            {
            name: "checkID",
            type: "rawlist",
            message: "What is the ID of the product? (EX:1156, 1589)",
            choices: function() {
                var choiceArray = [];
                for (var i = 0; i < results.length; i++) {
                  choiceArray.push(results[i].item_id);
                }
                return choiceArray;
              },
        }
    ])    
//  .then(function(answer){
    
//      })
    });
}