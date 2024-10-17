CREATE TABLE users(
    email varchar(255) primary key,
    created_at timestamp default now()
);

INSERT INTO users(email) values ('katie34@yahoo.com'),('tunde@gmail.com');