# book-manager-library

A Collection Of book manager library Using NodeJS MySQL ExpressJS

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![GitHub followers](https://img.shields.io/github/followers/iyansr?style=social)](https://github.com/iyansr?tab=followers)
![GitHub repo size](https://img.shields.io/github/repo-size/iyansr/novel-library-api)

<p align="center">
  <a href="https://nodejs.org/">
    <img title="Restful API" height='200' src="https://raw.githubusercontent.com/iyansr/novel-library-api/master/img.jpg">
  </a>
</p>

# Table Of Content

- [Book manager library](#book-manager-library)
  - [Table Of Content](#table-of-content)
  - [Build Setup](#build-setup)
  - [Stacks](#stacks)
  - [Dependencies](#dependencies)
  - [Aplication Structure](#aplication-Structure)
  - [Docs](#docs)
    - [Library](#library)
    - [Genre](#genre)
    - [Status](#status)

## Build Setup

1. Clone repository
   `$ git clone https://github.com/afsori/book-manager-library.git`

2. Install depedencies

```bash
# with npm
$ npm install

# or with yarn
$ yarn install
```

3. Setup your environment variable in `.env` files (if not exists, create your own).

```env
DB_HOST      = 'localhost'
DB_USER      = 'root'
DB_PASSWORD  = 'xxx'
DB_DATABASE  = 'dbname'
```

4. Start API server

```bash
$ npm run server
```

## Stacks

- NodeJS
- MySQL
- ExpressJS

## Dependencies

- [expressjs](https://www.npmjs.com/package/express) - The server for handling and routing HTTP requests
- [morgan](https://www.npmjs.com/package/morgan) - a HTTP request logger middleware for Node.js. It simplifies the process of logging requests to your application
- [dotenv](https://www.npmjs.com/package/dotenv) - is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [momentjs](https://www.npmjs.com/package/moment) - To convert dateTime from javascript format to mysql format easily
- [mysql](https://www.npmjs.com/package/mysql) - NodeJs driver for MySQL
- [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware
- [nodemon](https://www.npmjs.com/package/nodemon) - is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Aplication Structure

- `app.js` - Entry point of our aplication
- `src/Configs` - This folder contain configuration files of our app, such as mysql connection
- `src/Models` - This folder containt files that define query of MysQL
- `src/Routes` - Route of our app going here
- `src/Helpers` - This folder contain file that help you simplify your code such as define the error handling
- `src/Controllers` - This folder contain configuration files that links Models to Route

---

## Docs

### **Library**

| Method | Endpoint        | Description        | Request Param    | Request Body                                                                                              | Request Query                                                  |
| ------ | --------------- | ------------------ | ---------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| GET    | /library        | Get library        | -                | -                                                                                                         | `title`:STRING `author`:STRING `genre`: STRING `status`:STRING |
| POST   | /library/insert | Add New library    | -                | `title`:STRING (Required) `author`:STRING (Required) `status`:STRING (Required) `genre`:STRING (Required) | -                                                              |
| PUT    | library/edit    | Edit library By ID | `id`: INT (UUID) | `title`:STRING (Required) `author`:STRING (Required) `status`:STRING (Required) `genre`:STRING (Required) | -                                                              |
| DELETE | library/delete  | Delete library     | -                | `id`:INT                                                                                                  | -                                                              |

### **Genre**

| Method | Endpoint       | Description    | Request Param | Request Body | Request Query |
| ------ | -------------- | -------------- | ------------- | ------------ | ------------- |
| GET    | /library/genre | Get All Genres | -             | -            | -             |

---

### **Status**

| Method | Endpoint        | Description    | Request Param | Request Body | Request Query |
| ------ | --------------- | -------------- | ------------- | ------------ | ------------- |
| GET    | /library/status | Get All status | -             | -            | -             |

---

Copyright © 2019 by M. Afsori
