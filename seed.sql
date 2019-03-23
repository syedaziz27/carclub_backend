CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    bio VARCHAR UNIQUE NOT NULL,
    picture VARCHAR NOT NULL,
    zip INT NOT NULL
);

CREATE TABLE make (
    id SERIAL PRIMARY KEY,
    name VARCHAR UNIQUE NOT NULL
);

CREATE TABLE model (
    id SERIAL PRIMARY KEY,
    makeID VARCHAR NOT NULL,
    name VARCHAR NOT NULL
);

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    userID INT REFERENCES users(id) NOT NULL,
    makeID INT REFERENCES make(id) NOT NULL,
    modelID INT REFERENCES model(id) NOT NULL,
    year INT NOT NULL,
    mileage INT NOT NULL,
    color VARCHAR NOT NULL,
    price VARCHAR NOT NULL,
    images VARCHAR NOT NULL,
    description VARCHAR NOT NULL
);

CREATE TABLE favorites (
    userID INT REFERENCES users(id) NOT NULL,
    carID INT REFERENCES cars(id) NOT NULL
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    buyerID INT REFERENCES users(id) NOT NULL,
    sellerID INT REFERENCES users(id) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO users (username, email, bio, picture, zip)
VALUES ('syed', 'email', 'bio', 'url', 11218)