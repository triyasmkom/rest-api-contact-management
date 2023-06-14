# Membuat API Contact User Management

## Requirement
1. User Management
2. Contact Management
3. Address Management


## User Management Requirement
1. Username
2. Password
3. Name

### User API
1. Register User
2. Login User
3. Update User
4. Get User
5. Logout User


## Contact Management Requirement
1. First Name
2. Last Name
3. Email
4. Phone

### Contact API
1. Create Contact
2. Update Contact
3. Get Contact
4. Search Contact
5. Remove Contact


## Contact Address Data
1. Street
2. City
3. Province
4. Country
5. Postal Code

### Contact Address API
1. Create Address
2. Update Address
3. Get Address
4. List Address
5. Remove Address



## Membuat Project
1. Buat folder belajar-nodejs-restfull-api
2. jalankan ```npm init```
3. Buka file package.json dan tambahkan type module


```json
{
  "name": "restful-contact-management",
  "version": "1.0.0",
  "description": "Node Js Restful API",
  "main": "src/main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```


## Menambah Dependensi
### Menambahkan Package Joi 
1. Untuk Validasi
2. npm install joi


```json
{
  "name": "restful-contact-management",
  "version": "1.0.0",
  "description": "Node Js Restful API",
  "main": "src/main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "joi": "^17.9.2"
  }
}

```

### Menambahkan Package Express Js
1. npm install express : untuk rest api
2. npm install --save-dev @types/express : untuk autocomplete text editor kita

```json
{
  "name": "restful-contact-management",
  "version": "1.0.0",
  "description": "Node Js Restful API",
  "main": "src/main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "joi": "^17.9.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.17"
  }
}

```

### Menambahkan Package Prisma
1.  Untuk database
2.  npm install --save-dev prisma

```json
{
  "name": "restful-contact-management",
  "version": "1.0.0",
  "description": "Node Js Restful API",
  "main": "src/main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "joi": "^17.9.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "prisma": "^4.15.0"
  }
}

```

### Menambahkan Package Winston
1. Untuk Logger
2. npm install winston

```json
{
  "name": "restful-contact-management",
  "version": "1.0.0",
  "description": "Node Js Restful API",
  "main": "src/main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "joi": "^17.9.2",
    "winston": "^3.9.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "prisma": "^4.15.0"
  }
}

```

### menambahkan Package BCrypt
1. Algoritma untuk melakukan hashing
2. Untuk menyimpan password ke database
3. npm install bcrypt
4. npm install --save-dev @types/bcrypt

```json
{
  "name": "restful-contact-management",
  "version": "1.0.0",
  "description": "Node Js Restful API",
  "main": "src/main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "express": "^4.18.2",
    "joi": "^17.9.2",
    "winston": "^3.9.0"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/express": "^4.17.17",
    "prisma": "^4.15.0"
  }
}
```


### Menambahkan Package UUID
1. Universal Uniq Identifier
2. Untuk membuat string uniq
3. npm install uuid
4. npm install --save-dev @types/uuid


```json
{
  "name": "restful-contact-management",
  "version": "1.0.0",
  "description": "Node Js Restful API",
  "main": "src/main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "express": "^4.18.2",
    "joi": "^17.9.2",
    "uuid": "^9.0.0",
    "winston": "^3.9.0"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/express": "^4.17.17",
    "@types/uuid": "^9.0.2",
    "prisma": "^4.15.0"
  }
}

```

## Setup Unit Test

### Menambahkan Package Jest
1. Untuk unit test
2. npm install --save-dev jest @types/jest

```json
{
  "name": "restful-contact-management",
  "version": "1.0.0",
  "description": "Node Js Restful API",
  "main": "src/main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "express": "^4.18.2",
    "joi": "^17.9.2",
    "uuid": "^9.0.0",
    "winston": "^3.9.0"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/express": "^4.17.17",
    "@types/jest": "^29.5.2",
    "@types/uuid": "^9.0.2",
    "jest": "^29.5.0",
    "prisma": "^4.15.0"
  }
}

```


### Menambahkan Package Babel
1. Karena menggunakan javascript type modul jest tidak mendukung ini.
2. Dengan demikian kita tambahkan babel untuk mentranslate ketika dijalankan oleh jest nya.
3. npm install --save-de babel-jest @babel/preset-env
4. https://babeljs.io/setup#installation

```json
{
  "name": "restful-contact-management",
  "version": "1.0.0",
  "description": "Node Js Restful API",
  "main": "src/main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "express": "^4.18.2",
    "joi": "^17.9.2",
    "uuid": "^9.0.0",
    "winston": "^3.9.0"
  },
  "devDependencies": {
    "@babel/preset-env": "^7.22.5",
    "@types/bcrypt": "^5.0.0",
    "@types/express": "^4.17.17",
    "@types/jest": "^29.5.2",
    "@types/uuid": "^9.0.2",
    "babel-jest": "^29.5.0",
    "jest": "^29.5.0",
    "prisma": "^4.15.0"
  }
}

```

### Setup Babel

Tambahkan script ini ke dalam file package.json:

```json
"scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  },
```

menjadi:

```json
{
  "name": "restful-contact-management",
  "version": "1.0.0",
  "description": "Node Js Restful API",
  "main": "src/main.js",
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "express": "^4.18.2",
    "joi": "^17.9.2",
    "uuid": "^9.0.0",
    "winston": "^3.9.0"
  },
  "devDependencies": {
    "@babel/preset-env": "^7.22.5",
    "@types/bcrypt": "^5.0.0",
    "@types/express": "^4.17.17",
    "@types/jest": "^29.5.2",
    "@types/uuid": "^9.0.2",
    "babel-jest": "^29.5.0",
    "jest": "^29.5.0",
    "prisma": "^4.15.0"
  }
}
```

selanjutnya buat konfigurasi file ```babel.config.json``` :

```json
{
  "presets": ["@babel/preset-env"]
}
```

biasanya jest berjalan secara paralel, agar dapat berjalan secara sequential kita ubah script di package.json :

```json
"scripts": {
    "test": "jest -i"
},

```

### menambahkan Package Supertest
1. Untuk mempermudah melakukan testing express js
2. npm install --save-dev supertest @types/supertest


```json
{
  "name": "restful-contact-management",
  "version": "1.0.0",
  "description": "Node Js Restful API",
  "main": "src/main.js",
  "scripts": {
    "test": "jest -i"
  },
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "express": "^4.18.2",
    "joi": "^17.9.2",
    "uuid": "^9.0.0",
    "winston": "^3.9.0"
  },
  "devDependencies": {
    "@babel/preset-env": "^7.22.5",
    "@types/bcrypt": "^5.0.0",
    "@types/express": "^4.17.17",
    "@types/jest": "^29.5.2",
    "@types/supertest": "^2.0.12",
    "@types/uuid": "^9.0.2",
    "babel-jest": "^29.5.0",
    "jest": "^29.5.0",
    "prisma": "^4.15.0",
    "supertest": "^6.3.3"
  }
}

```


## API Spec

### 1. User API Spec

#### Register User

Endpoint: POST /api/users

Request Body:

```json
{
  "username" : "test-user",
  "password" : "rahasia",
  "name"  : "Test User"
}
```

Response Body Success:


```json
{
  "status": true,
  "data": {
      "username" : "test-user",
      "name"  : "Test User"
  }
}
```

Response Body Errors:

```json
{
  "status": false,
  "errors": "Username already registered"
}
```


#### Login User

Endpoint: POST /api/users/login

Request Body:

```json
{
  "username" : "test-user",
  "password" : "rahasia"
}
```

Response Body Success:

```json
{
  "status": true,
  "data": {
      "token" : "uniq-token"
  }
}
```

Response Body Error:

```json
{
  "status": false,
  "errors": "Username or password wrong"
}
```

#### Update User

Endpoint: PATCH /api/users/current

Headers:
- Authorization : token

Request Body:

```json
{
  "name": "Test Users",           // optional
  "new_password" : "rahasia"      // optional
}
```

Response Body Success:

```json
{
  "status": true,
  "data": {
      "username" : "test-user",
      "name": "Test User"
  }
}
```

Response Body Error:

```json
{
  "status": false,
  "errors": "Name length max 100"
}
```

#### Get User

Endpoint: GET /api/users/current

Headers:
- Authorization : token

Response Body Success:

```json
{
  "status": true,
  "data": {
      "username" : "test-user",
      "name": "Test User"
  }
}
```

Response Body Error:

```json
{
  "status": false,
  "errors": "Unauthorized"
}
```

#### Logout User

Endpoint: DELETE /api/users/logout

Headers:
- Authorization : token

Response Body Success:

```json
{
  "status": true,
  "data": "OK"
}
```

Response Body Error:

```json
{
  "status": false,
  "errors": "Unauthorized"
}
```


### 2. Contact API Spec

#### Create Contact API

Endpoint: POST /api/contacts

Headers:
- Authorization : token


Request Body:

```json
{
  "first_name": "test-name",
  "last_name": "test-name",
  "phone_number":"1234565767",
  "email": "test@email.com"
}
```

Response Body Success:

```json
{
  "status": true,
  "data": {
    "id":1,
    "first_name": "test-name",
    "last_name": "test-name",
    "phone_number":"1234565767",
    "email": "test@email.com"
  }
}
```

Response Body Error:

```json
{
  "status": false,
  "errors": "Email is not valid format"
}
```

#### Update Contact API

Endpoint: PUT /api/contacts/:id

Headers:
- Authorization : token


Request Body:

```json
{
  "first_name": "test-name",
  "last_name": "test-name",
  "phone_number":"1234565767",
  "email": "test@email.com"
}
```

Response Body Success:

```json
{
  "status": true,
  "data": {
    "id":1,
    "first_name": "test-name",
    "last_name": "test-name",
    "phone_number":"1234565767",
    "email": "test@email.com"
  }
}
```

Response Body Error:

```json
{
  "status": false,
  "errors": "Email is not valid format"
}
```

#### Get Contact API

Endpoint: GET /api/contacts

Headers:
- Authorization : token

Response Body Success:

```json
{
  "status": true,
  "data": {
    "id":1,
    "first_name": "test-name",
    "last_name": "test-name",
    "phone_number":"1234565767",
    "email": "test@email.com"
  }
}
```

Response Body Error:

```json
{
  "status": false,
  "errors": "Contact is not found"
}
```

#### Search Contact API

Endpoint: GET /api/contacts

Headers:
- Authorization : token

Query params:
- name: Search by first_name or last_name, using like, optional
- email: Search by email, using like, optional
- phone: Search by phone, using like, optional
- page: number of page, default 1
- size: size of page, default 10

Response Body Success:

```json
{
  "status": true,
  "data": [{
    "id":1,
    "first_name": "test-name",
    "last_name": "test-name",
    "phone_number":"1234565767",
    "email": "test@email.com"
  }, {
    "id":2,
    "first_name": "test-name",
    "last_name": "test-name",
    "phone_number":"1234565767",
    "email": "test@email.com"
  }, {
    "id":3,
    "first_name": "test-name",
    "last_name": "test-name",
    "phone_number":"1234565767",
    "email": "test@email.com"
  }],
  "page": 1,
  "total_page": 3,
  "total_item": 30
}
```

Response Body Error:

```json
{
  "status": false,
  "errors": "Email is not valid format"
}
```

#### Remove Contact API


Endpoint: DELETE /api/contacts/:id

Headers:
- Authorization : token


Response Body Success:

```json
{
  "status": true,
  "data": "OK"
}
```

Response Body Error:

```json
{
  "status": false,
  "errors": "Contact is not found"
}
```



### 3. Address API Spec
#### Create Address API

Endpoint: POST /api/contacts/:contactId/addresses

Headers:
- Authorization : token


Request Body:

```json
{
  "street": "Jl. Cibarusa",
  "city": "Bandung",
  "province":"Jawa Barat",
  "country": "Indonesia",
  "postal_code": "551234"
}
```

Response Body Success:

```json
{
  "status": true,
  "data": {
    "id":1,
    "street": "Jl. Cibarusa",
    "city": "Bandung",
    "province":"Jawa Barat",
    "country": "Indonesia",
    "postal_code": "551234"
  }
}
```

Response Body Error:

```json
{
  "status": false,
  "errors": "Coutry is required"
}
```

#### Update Address API

Endpoint: PUT /api/contacts/:contactId/addresses/:addressId

Headers:
- Authorization : token


Request Body:

```json
{
  "street": "Jl. Cibarusa",
  "city": "Bandung",
  "province":"Jawa Barat",
  "country": "Indonesia",
  "postal_code": "551234"
}
```

Response Body Success:

```json
{
  "status": true,
  "data": {
    "id":1,
    "street": "Jl. Cibarusa",
    "city": "Bandung",
    "province":"Jawa Barat",
    "country": "Indonesia",
    "postal_code": "551234"
  }
}
```

Response Body Error:

```json
{
  "status": false,
  "errors": "Coutry is required"
}
```

#### Get Address API

Endpoint: GET /api/contacts/:contactId/addresses/:addressId

Headers:
- Authorization : token

Response Body Success:

```json
{
  "status": true,
  "data": {
    "id":1,
    "street": "Jl. Cibarusa",
    "city": "Bandung",
    "province":"Jawa Barat",
    "country": "Indonesia",
    "postal_code": "551234"
  }
}
```

Response Body Error:

```json
{
  "status": false,
  "errors": "Contact is not found"
}
```

#### List Address API

Endpoint: GET /api/contacts/:contactId/addresses

Headers:
- Authorization : token

Response Body Success:

```json
{
  "status": true,
  "data": [{
      "id":1,
      "street": "Jl. Cibarusa",
      "city": "Bandung",
      "province":"Jawa Barat",
      "country": "Indonesia",
      "postal_code": "551234"
    },{
      "id":2,
      "street": "Jl. Cibarusa",
      "city": "Bandung",
      "province":"Jawa Barat",
      "country": "Indonesia",
      "postal_code": "551234"
    },{
      "id":3,
      "street": "Jl. Cibarusa",
      "city": "Bandung",
      "province":"Jawa Barat",
      "country": "Indonesia",
      "postal_code": "551234"
    }]
}
```

Response Body Error:

```json
{
  "status": false,
  "errors": "Contact is not found"
}
```

#### Remove Address API


Endpoint: GET /api/contacts/:contactId/addresses/:addressId

Headers:
- Authorization : token

Response Body Success:

```json
{
  "status": true,
  "data": "OK"
}
```

Response Body Error:

```json
{
  "status": false,
  "errors": "Contact is not found"
}
```


## Prisma

### Setup Prisma
1. Jalankan perintah: ```npx prisma init```
2. Setup .env :
   
  ```env
  DATABASE_URL="mysql://root:12345@localhost:3306/restful_api_db"
  ```

### User Model

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  username String  @id @db.VarChar(100)
  password String  @db.VarChar(100)
  name     String  @db.VarChar(100)
  token    String? @db.VarChar(100)

  @@map("users")
}

```


Misal kita lupa, kita dapat melakukan ini:

```bash
$ npx prisma --help

◭  Prisma is a modern DB toolkit to query, migrate and model your database (https://prisma.io)

Usage

  $ prisma [command]

Commands

            init   Set up Prisma for your app
        generate   Generate artifacts (e.g. Prisma Client)
              db   Manage your database schema and lifecycle
         migrate   Migrate your database
          studio   Browse your data with Prisma Studio
        validate   Validate your Prisma schema
          format   Format your Prisma schema

Flags

     --preview-feature   Run Preview Prisma commands

Examples

  Set up a new Prisma project
  $ prisma init

  Generate artifacts (e.g. Prisma Client)
  $ prisma generate

  Browse your data
  $ prisma studio

  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ prisma migrate dev
  
  Pull the schema from an existing database, updating the Prisma schema
  $ prisma db pull

  Push the Prisma schema state to the database
  $ prisma db push

  Validate your Prisma schema
  $ prisma validate

  Format your Prisma schema
  $ prisma format
```


```bash
$ npx prisma migrate --help

Update the database schema with migrations
  
Usage

  $ prisma migrate [command] [options]

Commands for development

         dev   Create a migration from changes in Prisma schema, apply it to the database
               trigger generators (e.g. Prisma Client)
       reset   Reset your database and apply all migrations, all data will be lost

Commands for production/staging

      deploy   Apply pending migrations to the database 
      status   Check the status of your database migrations
     resolve   Resolve issues with database migrations, i.e. baseline, failed migration, hotfix

Command for any stage

        diff   Compare the database schema from two arbitrary sources

Options

  -h, --help   Display this help message
    --schema   Custom path to your Prisma schema

Examples

  Create a migration from changes in Prisma schema, apply it to the database, trigger generators (e.g. Prisma Client)
  $ prisma migrate dev

  Reset your database and apply all migrations
  $ prisma migrate reset

  Apply pending migrations to the database in production/staging
  $ prisma migrate deploy

  Check the status of migrations in the production/staging database
  $ prisma migrate status

  Specify a schema
  $ prisma migrate status --schema=./schema.prisma

  Compare the database schema from two databases and render the diff as a SQL script
  $ prisma migrate diff \
    --from-url "$DATABASE_URL" \
    --to-url "postgresql://login:password@localhost:5432/db" \
    --script
```

```bash
$ npx prisma migrate dev --help

🏋️  Create a migration from changes in Prisma schema, apply it to the database, trigger generators (e.g. Prisma Client)
 
Usage

  $ prisma migrate dev [options]

Options

       -h, --help   Display this help message
         --schema   Custom path to your Prisma schema
       -n, --name   Name the migration
    --create-only   Create a new migration but do not apply it
                    The migration will be empty if there are no changes in Prisma schema
  --skip-generate   Skip triggering generators (e.g. Prisma Client)
      --skip-seed   Skip triggering seed

Examples

  Create a migration from changes in Prisma schema, apply it to the database, trigger generators (e.g. Prisma Client)
  $ prisma migrate dev

  Specify a schema
  $ prisma migrate dev --schema=./schema.prisma

  Create a migration without applying it
  $ prisma migrate dev --create-only

```


Mari kita jalankan migration tanpa eksekusi ke database: 

```bash
$ npx prisma migrate dev --create-only
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": MySQL database "restful_api_db" at "localhost:3306"

MySQL database restful_api_db created at localhost:3306

✔ Enter a name for the new migration: … first_migrate
Prisma Migrate created the following migration without applying it 20230614094418_first_migrate

You can now edit it and apply it by running prisma migrate dev.
```

Hasil migrasi dapat di lihat di folder ```prisma/migrations/``` , kita bisa cek di file .sql nya:

```mysql
-- CreateTable
CREATE TABLE `users` (
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `token` VARCHAR(100) NULL,

    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

```


Ketika hasil migrasi sudah sesuai, mari kita lakukan migrasi ke database, dengan perintah:

```bash
$ npx prisma migrate dev

Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": MySQL database "restful_api_db" at "localhost:3306"

Applying migration `20230614094418_first_migrate`

The following migration(s) have been applied:

migrations/
  └─ 20230614094418_first_migrate/
    └─ migration.sql

Your database is now in sync with your schema.

Running generate... (Use --skip-generate t
o skip the generators)
(⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠦ idealTree:restful-c(⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠦ idealTree:restful-c(⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠦ idealTree:restful-c(#########⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠇ idealTree: timing i

added 2 packages, and audited 542 packages in 25s

42 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

✔ Generated Prisma Client (4.15.0 | librar
y) to ./node_modules/@prisma/client in 484
ms
```




### Contact Model

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  username String    @id @db.VarChar(100)
  password String    @db.VarChar(100)
  name     String    @db.VarChar(100)
  token    String?   @db.VarChar(100)
  contacts Contact[]

  @@map("users")
}

model Contact {
  id         Int     @id @default(autoincrement())
  first_name String  @db.VarChar(100)
  last_name  String? @db.VarChar(100)
  email      String? @db.VarChar(200)
  phone      String? @db.VarChar(20)
  username   String  @db.VarChar(100)
  user       User    @relation(fields: [username], references: [username])

  @@map("contacts")
}

```

```mysql
-- CreateTable
CREATE TABLE `contacts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NULL,
    `email` VARCHAR(200) NULL,
    `phone` VARCHAR(20) NULL,
    `username` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `contacts` ADD CONSTRAINT `contacts_username_fkey` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;


```


### Address Model


```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  username String    @id @db.VarChar(100)
  password String    @db.VarChar(100)
  name     String    @db.VarChar(100)
  token    String?   @db.VarChar(100)
  contacts Contact[]

  @@map("users")
}

model Contact {
  id         Int       @id @default(autoincrement())
  first_name String    @db.VarChar(100)
  last_name  String?   @db.VarChar(100)
  email      String?   @db.VarChar(200)
  phone      String?   @db.VarChar(20)
  username   String    @db.VarChar(100)
  user       User      @relation(fields: [username], references: [username])
  addresses  Address[]

  @@map("contacts")
}

model Address {
  id          Int     @id @default(autoincrement())
  street      String? @db.VarChar(255)
  city        String? @db.VarChar(100)
  province    String? @db.VarChar(100)
  country     String? @db.VarChar(100)
  postal_code String? @db.VarChar(10)
  contact_id  Int
  contact     Contact @relation(fields: [contact_id], references: [id])
}

```

```mysql
-- CreateTable
CREATE TABLE `Address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `street` VARCHAR(255) NULL,
    `city` VARCHAR(100) NULL,
    `province` VARCHAR(100) NULL,
    `country` VARCHAR(100) NULL,
    `postal_code` VARCHAR(10) NULL,
    `contact_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_contact_id_fkey` FOREIGN KEY (`contact_id`) REFERENCES `contacts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

```






## Reference:

https://www.youtube.com/watch?v=6v8JXecArqE