DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(20) NULL,
    department_name VARCHAR(20) NULL,
    price INT NULL,
    stock_quantity INT default 50 NULL,
    primary key(item_id)
); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
Values 
("Game System", "Electronics", 250, 15),
("Headphones", "Electronics", 100, 20),
("Laptop", "Electronics", 800, 100),
("Couch", "Furniture", 500, 25),
("Dresser", "Furniture", 145, 80),
("Jacket", "Clothing", 75, 50),
("Jeans", "Clothing", 45, 25),
("Shirt", "Clothing", 20, 45),
("Dictionary", "Books", 25, 150),
("Fight Club", "Books", 30, 45);

SELECT * FROM bamazonDB.products;