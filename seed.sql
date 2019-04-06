DROP DATABASE IF EXISTS carclub1;
CREATE DATABASE carclub1;

\c carclub1;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    picture VARCHAR,
    city VARCHAR NOT NULL,
    state VARCHAR NOT NULL,
    zip INT NOT NULL,
    bio VARCHAR,
    uid VARCHAR
);

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    make VARCHAR NOT NULL,
    model VARCHAR NOT NULL,
    color VARCHAR,
    owneremail VARCHAR NOT NULL,
    frontimg VARCHAR NOT NULL
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

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    carID INT REFERENCES cars(id) NOT NULL,
    posterID INT REFERENCES users(id) NOT NULL
);

CREATE TABLE replies (
    id SERIAL PRIMARY KEY,
    posterID INT REFERENCES users(id) NOT NULL,
    commentID INT REFERENCES comments(id) NOT NULL
    );

