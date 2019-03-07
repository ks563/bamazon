# bamazon
# liri-node-app

## Overview

Bamazon is a store interface that allows customers to view a store database and make selections based on the item id. 

## Technical Aspects

This app operates on the command line using JavaScipt Node MySQL, SQL, and NPM packages.

Node allows JavaScript to be run outside of the browser.
NPM _Node Package Management_ is an online database of node packages that are run in .js files. These packages are tools that allow for easier manipulation of the code/and or data retried from said packages.

### Node Packages Utilized
MySQL
Inquirer


##How to Use
Download the bamazon app. In your terminal navigate to folder and install the packages with "npm install". This will initiate the packages needed to run the app.


To run the app type node bamazonCustomer.js this will load the database and allow the customer to make a choice of an item. Input the item_id of the item you would like to buy and you will then be prompted to enter in how many of the item you would like. 

![customer-order](/customer-order.png)


The update database function is then called and the database is adjusted to reflect the purchase

![update-db](/update-db.png)

If the number of items requested for purchase is over the amount in stock, the customer is notified.
![customer-overorder](/customer-overorder.png)