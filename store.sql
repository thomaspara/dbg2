CREATE DATABASE db_market;
USE db_market;

CREATE TABLE Customer (
  customer_id INT NOT NULL,
  f_name TEXT,
  l_name TEXT,
  user_password TEXT,
  email TEXT,
  PRIMARY KEY (customer_id)
);

CREATE TABLE BillingInfo (
  bill_id INT NOT NULL,
  bank_num INT,
  customer_id INT NOT NULL,
  PRIMARY KEY (bill_id),
  FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

CREATE TABLE Seller (
  seller_id INT NOT NULL,
  seller_name TEXT,
  seller_description TEXT,
  PRIMARY KEY (seller_id)
);

CREATE TABLE Products (
  product_id INT NOT NULL,
  product_name TEXT,
  price DOUBLE,
  product_description TEXT,
  seller_id INT NOT NULL,
  PRIMARY KEY (product_id),
  FOREIGN KEY (seller_id) REFERENCES Seller(seller_id)
);

CREATE TABLE Transaction (
  transaction_id INT NOT NULL,
  customer_id INT NOT NULL,
  product_id INT NOT NULL,
  seller_id INT NOT NULL,
  total_cost DOUBLE,
  PRIMARY KEY (transaction_id),
  FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
  FOREIGN KEY (product_id) REFERENCES Products(product_id),
  FOREIGN KEY (seller_id) REFERENCES Seller(seller_id)
);

CREATE TABLE Cart (
  cart_id INT NOT NULL,
  customer_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT,
  PRIMARY KEY (cart_id),
  FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
  FOREIGN KEY (product_id) REFERENCES Products(product_id)
); 