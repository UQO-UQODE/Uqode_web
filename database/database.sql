/*
UQODE Database
RDBMS: mySQL
*/

CREATE Database IF NOT EXISTS uqode_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE account (
     id INT PRIMARY KEY  AUTO_INCREMENT,
     firstName varchar(30) NOT NULL,
     lastName varchar(30) NOT NULL,
     email varchar(100) NOT NULL,
     passphrase varchar(255) NOT NULL,
     state_id int NOT NULL,
     permission_id int NOT NULL,
     school varchar(100) NOT NULL,
     birthday DATE,
     gender_id int,
     team_id int
);

CREATE TABLE state (
     id int PRIMARY KEY  AUTO_INCREMENT,
     title varchar(100) NOT NULL
);

CREATE TABLE permission (
     id INT PRIMARY KEY  AUTO_INCREMENT,
     title varchar(100) NOT NULL
);

CREATE TABLE gender (
     id INT PRIMARY KEY  AUTO_INCREMENT,
     genderType varchar(100) NOT NULL
);

CREATE TABLE location (
     id INT PRIMARY KEY  AUTO_INCREMENT,
     country varchar(100) NOT NULL,
     state varchar(100) NOT NULL,
     city varchar(100) NOT NULL,
     address varchar(100) NOT NULL,
     civicNumber int NOT NULL,
     postalCode int NOT NULL,
     appartNumber int,
     account_id int NOT NULL
);

CREATE TABLE team (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    numberParticipants int NOT NULL,
    event_id int NOT NULL
);

CREATE TABLE codingEvent (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    startDate datetime NOT NULL,
    endDate datetime NOT NULL,
    description text NOT NULL,
    location_id int NOT NULL
);

-- ------ADDING THE FOREIGN KEY--------

ALTER TABLE account
    ADD FOREIGN KEY (state_id) REFERENCES state (id),
    ADD FOREIGN KEY (permission_id) REFERENCES permission (id),
    ADD FOREIGN KEY (gender_id) REFERENCES gender (id),
    ADD FOREIGN KEY (team_id) REFERENCES team (id);

ALTER TABLE team
  ADD FOREIGN KEY (event_id) REFERENCES codingEvent (id) ON DELETE CASCADE;

ALTER TABLE location
  ADD FOREIGN KEY (account_id) REFERENCES account (id) ON DELETE CASCADE;
  
-- -----------------------------------------------------------------------------------------------
