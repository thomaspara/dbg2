CREATE TABLE `Customer` (
  `customer_id` INT,
  `f_name` TEXT,
  `l_name` TEXT,
  `password` TEXT,
  `email` TEXT,
  PRIMARY KEY (`customer_id`)
);

CREATE TABLE `Billing Info` (
  `bill_id` INT,
  `bank_num` INT,
  `customer_id` INT,
  PRIMARY KEY (`bill_id`)
);

CREATE TABLE `Transaction` (
  `transaction_id` INT,
  `customer_id` INT,
  `product_id` INT,
  `seller_id` INT,
  `total_cost` DOUBLE(100,2),
  PRIMARY KEY (`transaction_id`)
);

CREATE TABLE `Products` (
  `product_id` INT,
  `name` TEXT,
  `price` DOUBLE(100,2),
  `description` TEXT,
  `seller_id` INT,
  PRIMARY KEY (`product_id`)
);

CREATE TABLE `Seller` (
  `seller_id` INT,
  `name` TEXT,
  `description` TEXT,
  PRIMARY KEY (`seller_id`)
);

CREATE TABLE `Cart` (
  `cart_id` INT,
  `customer_id` INT,
  `product_id` INT,
  `quantity` INT,
  PRIMARY KEY (`cart_id`)
);