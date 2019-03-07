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


function updateDB(ID, amt, quantity, price) {
    var totalPrice = amt * price;
    var updateAmt = quantity - amt;
    console.log("your total price is " + totalPrice);
    connection.query(
        "UPDATE product SET ? WHERE ? ",
        [{
            stock_quantity: updateAmt
        },
            {
            item_id: ID
        }]
    )
    connection.query(
        "SELECT * FROM product", function (err, res) {
            console.table(res);
        }
    )
}

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
        var itemID = answer.productID;
        var productAmt = answer.productAmt;
        connection.query(
            "SELECT * FROM product WHERE ?",
                { item_id: itemID }
            , function (err, res) {
                if (err) throw (err);
                if (productAmt <= res[0].stock_quantity) {
                    console.log("placing order!");
                    updateDB(itemID, productAmt, res[0].stock_quantity, res[0].price);
                } else {
                    console.log("we do not have enough product to fill your order");
                }
            }
        )
    })
};