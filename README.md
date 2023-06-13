# Membuat API Conatact User Management

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

