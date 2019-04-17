DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT,
    item_id VARCHAR(20) NULL,
    product_name VARCHAR(20) NULL,
    department_name VARCHAR(20) NULL,
    price INT NULL,
    stock_quantity INT default 50 NULL,
    primary key(id)
); 

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values ("1742", "Game System", "Electronics", 250, 15),
("1754", "TV", "Electronics", 100, 20),
("1792", "Laptop", "Electronics", 800, 100),
("1490", "Couch", "Furniture", 500, 25),
("1435", "Dresser", "Furniture", 145, 80),
("1222", "Jacket", "Clothing", 75, 50),
("1289", "Hat", "Clothing", 45, 25),
("1263", "Shirt", "Clothing", 20, 45),
("1110", "Dictionary", "Books", 25, 150),
("1074", "Fight Club", "Books", 30, 45);

SELECT * FROM bamazonDB.products;



-- inquirer
--                 .prompt({
--                     name: "askQuant",
--                     type: "number",
--                     message: "How many " + product + "s would you like?"
--                 })