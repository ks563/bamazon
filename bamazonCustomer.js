var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "127.0.0.1",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon"
});

function showProduct() {
    var query = connection.query(
        "SELECT * FROM product", function (err, res) {
            console.table(res);
        }
    )
}
connection.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId + "\n");
    showProduct();
    customerChoice();
});



function customerChoice() {
    inquirer.prompt([
        {
            type: "input",
            message: "input the id of the product you would like to buy",
            name: "productID"
        }, {
            type: "input",
            message: "how many would you like to buy?",
            name: "productAmt"
        }
    ]).then(function (answer) {
        connection.query(
            "SELECT item_id FROM product WHERE ?",
            [{
                item_id: answer.productAmt
            }]
            ""
        )
    })
}