DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
    id NOT NULL AUTO_INCREMENT,
    item_id INT NULL,
    product_name VARCHAR NULL,
    department_name VARCHAR NULL,
    price INT NULL,
    stock_quantity INT default 50,
    primary key(id)
); 

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (1742, "Game System", "Electronics", 250);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (1754, "Headphones", "Electronics", 100, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (1792, "Laptop", "Electronics", 800, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (1490, "Couch", "Furniture", 500, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (1435, "Dresser", "Furniture", 145);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (1222, "Jacket", "Clothing", 75, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (1289, "Jeans", "Clothing", 45, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (1263, "Shirt", "Clothing", 20, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (1110, "Dictionary", "Books", 25, 150);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
Values (1074, "Fight Club", "Books", 30, 200);