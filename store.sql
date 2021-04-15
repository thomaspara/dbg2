CREATE TABLE `Customer` (
  `customer_id` <type>,
  `f_name` <type>,
  `l_name` <type>,
  `password` <type>,
  `email` <type>,
  `cart` <type>,
  PRIMARY KEY (`customer_id`)
);

CREATE TABLE `Billing Info` (
  `bill_id` <type>,
  `bank_num` <type>,
  `customer_id` <type>,
  PRIMARY KEY (`bill_id`)
);

CREATE TABLE `Transaction` (
  `transaction_id` <type>,
  `customer_id` <type>,
  `product_id` <type>,
  `seller_id` <type>,
  PRIMARY KEY (`transaction_id`)
);

CREATE TABLE `Products` (
  `product_id` <type>,
  `name` <type>,
  `price` <type>,
  `description` <type>,
  `seller_id` <type>,
  PRIMARY KEY (`product_id`)
);

CREATE TABLE `Seller` (
  `seller_id` <type>,
  `name` <type>,
  `description` <type>,
  PRIMARY KEY (`seller_id`)
);