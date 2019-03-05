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
        var itemID = answer.productID;
        var itemAmt = answer.productAmt;
     
        customerOrder(itemID, itemAmt);
        showProduct();
    })
};

function customerOrder(ID, amt) {
    connection.query(
        "SELECT * FROM product WHERE ?",
        {
            item_id: ID
        }
    ), function (err, res) {
            if (err) {
                console.log(err);
        } else if (amt <= res[0].stock_quantity) {
            var totalPrice = amt * res[0].price;
            console.log(totalPrice);
            connection.query(
                "UPDATE product SET product_amt= " + res[0].stock_quantity - amt + "WHERE ? ",
                {
                    item_id: ID
                }
            )
        } else {
        console.log("we do not have enough product to fill your order");
    }
}
}