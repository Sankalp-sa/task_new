# Ethereum Transaction API

A simple API for retrieving Ethereum transaction data, current Ethereum price, and user expenses.

## Description

This API provides endpoints to interact with Ethereum blockchain data. It allows users to retrieve transaction history for specific Ethereum addresses, get the current Ethereum price in INR, and calculate total expenses for a given address.

## Deployed Link

https://task-new-one.vercel.app/

## Getting Started

### Dependencies

* Node.js (v14 or higher)
* npm (v6 or higher)
* MongoDB (v4 or higher)

### Installing

1. Clone the repository:
```
git clone https://github.com/Sankalp-sa/task_new.git
```

2. Navigate to the project directory:
```
cd task_new
```

3. Install dependencies:
```
npm install
```

### Executing program

1. Start the server:
```
npm start
```

2. The server will be running on `http://localhost:3000`.

## API Documentation

All routes are prefixed with `/api/v1`.

### User Routes

All user routes are prefixed with `/api/v1/user`.

#### 1. Get Transactions

Retrieves transactions for a specific Ethereum address.

- **URL:** `/getTransactions/:user_address`
- **Method:** `GET`
- **URL Params:** 
  - `user_address`: Ethereum address of the user
- **Success Response:**
  - **Code:** 200
  - **Content:** 
    ```json
    {
      "user_address": "0x...",
      "transactions": [
        {
          // transaction details
        },
        // ...more transactions
      ]
    }
    ```
- **Error Response:**
  - **Code:** 500 INTERNAL SERVER ERROR
  - **Content:** `{ "error": {...}, "message": "Internal server error" }`

#### 2. Get Ethereum Price

Retrieves the current price of Ethereum in INR.

- **URL:** `/getEthereumPrice`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:** 
    ```json
    {
      "ethereumPrice": 150000.00
    }
    ```
- **Error Response:**
  - **Code:** 500 INTERNAL SERVER ERROR
  - **Content:** `{ "error": {...}, "message": "Internal server error" }`

#### 3. Get User Expenses

Retrieves the total expenses for a specific Ethereum address and the current Ethereum price.

- **URL:** `/totalExpenses/:user_address`
- **Method:** `GET`
- **URL Params:** 
  - `user_address`: Ethereum address of the user
- **Success Response:**
  - **Code:** 200
  - **Content:** 
    ```json
    {
      "user_address": "0x...",
      "totalExpenses": 1.5,
      "ethereumPrice": 150000.00
    }
    ```
- **Error Response:**
  - **Code:** 500 INTERNAL SERVER ERROR
  - **Content:** `{ "error": {...}, "message": "Internal server error" }`

## Version History

* 0.1
    * Initial Release
    * Basic endpoints for getting transactions, Ethereum price, and user expenses

## Acknowledgments

* [Express.js](https://expressjs.com/) for the web framework
* [Ethereum](https://ethereum.org/) for blockchain technology
* [MongoDB](https://www.mongodb.com/) for database management
