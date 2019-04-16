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

    connection.query("SELECT * FROM products", function (err, res) {
      if (err) throw err;
      console.log(res);
      start();
    });
});




// Start function
function start() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;

// Display table with items in terminal
inquirer
  .prompt([
    {
      name: "askItem",
      type: "input",
      message: "What item would  you like to purchase?",
      choices: function()  {
       },
    },
  ])    
.then(function(answer){
  inquirer
    .prompt([
      {
      name: "askQuant",
      type: "number",
      message: "How much of Item " + answer.askItem + " would you like?",
        validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
          return false;
        }
      },
    ])
.then(function(answer){

      })
    })
  });
}
