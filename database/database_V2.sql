/*
UQODE Database
RDBMS: mySQL
*/

CREATE Database IF NOT EXISTS uqode_V2 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
     gender_id int
);

CREATE TABLE state (
     id int PRIMARY KEY  AUTO_INCREMENT,
     title varchar(100) NOT NULL,
     rank int NOT NULL
);

CREATE TABLE permission (
     id INT PRIMARY KEY  AUTO_INCREMENT,
     title varchar(100) NOT NULL,
     rank int NOT NULL
);

CREATE TABLE gender (
     id INT PRIMARY KEY  AUTO_INCREMENT,
     genderType varchar(100) NOT NULL,
     rank int NOT NULL
);

CREATE TABLE faq(
     id INT PRIMARY KEY  AUTO_INCREMENT,
     question varchar(255) NOT NULL,
     response varchar(255) NOT NULL
);

CREATE TABLE accountProjet(
     id INT PRIMARY KEY AUTO_INCREMENT,
     account_id int NOT NULL,
     projet_id int NOT NULL
);

CREATE TABLE projet(
     id INT PRIMARY KEY AUTO_INCREMENT,
     title varchar(100) NOT NULL,
     description varchar(2000) NOT NULL
);

CREATE TABLE accountTeam(
     id INT PRIMARY KEY AUTO_INCREMENT,
     account_id int NOT NULL,
     team_id int NOT NULL,
     rankEventTeam_id int NOT NULL
);

CREATE TABLE rankEventTeam(
     id INT PRIMARY KEY AUTO_INCREMENT,
     title varchar(100) NOT NULL,
     rank int NOT NULL
);

CREATE TABLE team(
     id INT PRIMARY KEY AUTO_INCREMENT,
     name varchar(100) NOT NULL,
     nbMember int NOT NULL,
     event_id int NOT NULL
);


CREATE TABLE codingEvent(
     id INT PRIMARY KEY AUTO_INCREMENT,
     title varchar(100) NOT NULL,
     description varchar(2000)
);

-- ------ADDING THE FOREIGN KEY--------

ALTER TABLE account
    ADD FOREIGN KEY (state_id) REFERENCES state (id),
    ADD FOREIGN KEY (permission_id) REFERENCES permission (id),
    ADD FOREIGN KEY (gender_id) REFERENCES gender (id);

ALTER TABLE team
  ADD FOREIGN KEY (event_id) REFERENCES codingEvent (id) ON DELETE CASCADE;

ALTER TABLE accountTeam
  ADD FOREIGN KEY (team_id) REFERENCES team (id) ON DELETE CASCADE,
  ADD FOREIGN KEY (rankEventTeam_id) REFERENCES rankEventTeam (id) ON DELETE CASCADE;

ALTER TABLE accountProjet
  ADD FOREIGN KEY (account_id) REFERENCES account (id) ON DELETE CASCADE,
  ADD FOREIGN KEY (projet_id) REFERENCES projet (id) ON DELETE CASCADE;

-- -----------------------------------------------------------------------------------------------
-- ------ADDING DEFAULT DATA --------
INSERT INTO `state` (`id`, `title`) VALUES (NULL, 'Active'), 
                                           (NULL, 'Inactive');

INSERT INTO `permission` (`id`, `title`) VALUES (NULL, 'User'), 
                                                (NULL, 'Admin');

INSERT INTO `gender` (`id`, `genderType`) VALUES (NULL, 'Male'), 
                                                 (NULL, 'Femelle'),
                                                 (NULL, 'Other');

-- -----------------------------------------------------------------------------------------------

