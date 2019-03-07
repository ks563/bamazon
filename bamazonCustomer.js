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


function updateDB (ID, amt, quantity, price) {
    var totalPrice = amt * price;
    console.log(totalPrice);
    connection.query(
        "UPDATE product SET product_amt= " + quantity - amt + "WHERE ? ",
        {
            item_id: ID
        }
    )
    connection.query(
        "SELECT * FROM product", function (err, res) {
            console.table(res);
        }
    )
}

// function customerOrder(ID, amt) {
//     console.log("order function");
//     connection.query(
//         "SELECT * FROM product WHERE item_id = " + ID
//     ), function (err, res) {
//         console.log(res);
//         if (err) {
//             console.log(err);
//         } if (amt <= res[0].stock_quantity) {
//             console.log("placing order!");
//             updateDB(itemID, itemAmt, res[0].stock_quantity, res[0].price);
//         } else {
//             console.log("we do not have enough product to fill your order");
//         }
//     }
// }


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
        // console.log(answer);
        connection.query(
            "SELECT * FROM product WHERE ?",
            {
                item_id: answer.productID
            }
        ), function (err, res) {
            console.log(res);
            if (err) {
                console.log(err);
            } if (amt <= res[0].stock_quantity) {
                console.log("placing order!");
                updateDB(itemID, itemAmt, res[0].stock_quantity, res[0].price);
            } else {
                console.log("we do not have enough product to fill your order");
            }
        }
    })
};

