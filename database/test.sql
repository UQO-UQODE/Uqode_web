/*
UQODE Database 
*/

CREATE Database IF NOT EXISTS uqode_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE account (
     id INT PRIMARY KEY  AUTO_INCREMENT,
     firstName varchar(30) NOT NULL,
     lastName varchar(30) NOT NULL,
     email varchar(100) NOT NULL,
     passphrase varchar(255) NOT NULL,
     state_id int,
     permission_id smallInt,
     school varchar(100),
     birthday DATE NOT NULL,
     gender_id int NOT NULL,
     location_id int NOT NULL,
     team_id int NOT NULL
);

CREATE TABLE state (
     id INT PRIMARY KEY  AUTO_INCREMENT,
     title varchar(100)
);

CREATE TABLE permission (
     id INT PRIMARY KEY  AUTO_INCREMENT,
     title varchar(100)
);

CREATE TABLE gender (
     id INT PRIMARY KEY  AUTO_INCREMENT,
     genderType varchar(100)
);

CREATE TABLE location (
     id INT PRIMARY KEY  AUTO_INCREMENT,
     country varchar(100) NOT NULL,
     state varchar(100) NOT NULL,
     city varchar(100)NOT NULL,
     address varchar(100)NOT NULL,
     civicNumber int NOT NULL,
     postalCode int NOT NULL,
     appartNumber int
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

--------ADDING THE FOREIGN KEY--------

-- add the foreign key state_id to account referencing id from state --
ALTER TABLE account
ADD FOREIGN KEY (state_id) REFERENCES state (id);

-- add the foreign key permission_id to account referencing id from permission --
ALTER TABLE account
ADD FOREIGN KEY (permission_id) REFERENCES permission (id);

-- add the foreign key gender_id to account referencing id from gender --
ALTER TABLE account
ADD FOREIGN KEY (gender_id) REFERENCES gender (id);

-- add the foreign key location_id to account referencing id from location --
ALTER TABLE account
ADD FOREIGN KEY (location_id) REFERENCES location (id);

-- add the foreign key team_id to account referencing id from team --
ALTER TABLE account
ADD FOREIGN KEY (team_id) REFERENCES team (id);

-- add the foreign key team_id to account referencing id from team --
ALTER TABLE team
ADD FOREIGN KEY (event_id) REFERENCES event (id);

-------------------------------------------------------------------------------------------------

-- insert gender types
INSERT INTO gender (genderType) VALUE ('Men');
INSERT INTO gender (genderType) VALUE ('Woman');
INSERT INTO gender (genderType) VALUE ('Other');

-- insert permission
INSERT INTO permission (title) VALUE ('User');
INSERT INTO permission (title) VALUE ('Admin');

-- insert state
INSERT INTO state (title) VALUE ('Active');
INSERT INTO state (title) VALUE ('Inactive');
INSERT INTO state (title) VALUE ('Archive');