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
        console.log("Connected!")
        displayItems();
    });


var displayItems = function(){
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++){
        console.log(res[i].id + " || " + res[i].item_id + " || " + res[i].product_name + " || " + res[i].price + " || " + res[i].stock_quantity + " || ");
        } 
       start();
    });
}


// Start function
function start() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;

    inquirer
        .prompt([
            {
            name: "checkID",
            type: "rawlist",
            message: "What is the ID of the product? (Choose from list below)",
            choices: function() {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                  choiceArray.push(res[i].item_id);
                }
                return choiceArray;
              },
        }
    ])    
.then(function(answer){
    for(var i=0; i< res.length; i++){
        if (answer.checkID === res[i].item_id){
            var itemID = res[i].item_id;
            var item = res[i];
            var product = res[i].product_name;
            // console.log("Finally")
            // console.log(product)
            // console.log(itemID)
            console.log(res[i].id + " || " + res[i].item_id + " || " + res[i].product_name + " || " + res[i].price + " || " + res[i].stock_quantity + " || ");
            inquirer
                .prompt({
                    name: "askQuant",
                    type: "number",
                    message: "How many " + product + "s would you like?",
                    validate: function(value) {
                        if (isNaN(value) === false) {
                          return true;
                        }
                        return false;
                      }
                })
                .then(function(answer){
                    if ((item.stock_quantity-answer.askQuant)>0){
                        connection.query(
                            "'UPDATE products SET stock_quantity=' "+(item.stock_quantity-answer.askQuant) + " 'WHERE product_name=' " + product + "'", function(err,res2){
                            
                                displayItems();
                            })
                        }
                    })
                }
            }
        })
    }
)}
