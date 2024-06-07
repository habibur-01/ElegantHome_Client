## ElegantHome

# Instruction to run locally
- Download or clone this file
- Unzipping the file(if download)
- open the file on a IDE like VSCode
- Open Terminal (Cntrl+j)
- Run npm i for install all dependencies
- Write npm run dev and press enter

# Live Link
- https://home-decor-88f4b.web.app/

## Documentation

# Key Features:
- It  provide a platform for users to discover their desire decor items to make their home lively.
- Users can add item into their cart and also can delete them.
- Firebase: For user authentication like Sign up and Login.
- Implement SSLCommerz payment gateway for sending products price.


# Design Choices

- Technology Stack:

- Backend: Nodejs with Express.js framwork.
- Database: MongoDB.
- Frontend: CSS, Tailwind CSS javaScript & React.js for a dynamic and responsive user interface .
- Payment: SSlCommerz payment gateway

- Architecture:

- RESTful API: To ensure scalability and separation of concerns.


- Database Schema
The database schema is designed to handle user data, products, carts, and payment data. Below is a simplified version of the schema.

- Tables
- Users

id (Primary Key),
username ,
email (Unique),
password,
created at

- carts
id (Primary Key),
email,
productCode(unique),
productName,
productImg,
price

- products
id (Primary Key),
category,
name,
price,
rating,
image,
description:{color, material, productCode,details}

- API endpoints:
-User endpoint
- get, post ("/users")

- carts endpoint
- get, post ("/carts")
- delete ("/carts/:id")

- products endpoint
- get, post ("/products")

- payments endpoint
- post("/order")

# Challenges

- manage data and database 
- Solutions: collect image from freepic.com and unsplash. For database, google  help me manage this side.




