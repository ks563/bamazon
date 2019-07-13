DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE product (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL, 
    price INTEGER(10) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,    
    PRIMARY KEY (item_id)
);


INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("tillamook cheddar", "aged cheese", 6, 200);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("challerhocker", "aged cheese", 22, 50);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("bon bouche", "fresh goat cheese", 12, 22);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("cana de cabra", "fresh goat cheese", 25,22);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("evalon", "aged goat cheese", 36, 22);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("potter's crackers", "crackers", 7, 70);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("baguette", "bread", 3, 22);

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES ("atmospheres", "sparkling wine", 27, 22);


