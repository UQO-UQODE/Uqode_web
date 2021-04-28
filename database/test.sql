/*
SQL test for uqode
*/
INSERT INTO codingEvent (name,startDate,endDate,description) VALUES ("Evenement de test",'2021-02-23 02:40:31', '2021-02-23 02:40:32',"je suis une description");
INSERT INTO team (name,numberParticipants,event_id) VALUES ("Les bananes", 4,1);

DELETE FROM codingEvent WHERE id = 1;

INSERT INTO location (country, account_id) VALUES ("ta mere",1);
INSERT INTO account (firstname,lastname, email, passphrase) VALUES ("Jean", "JJ","kfwrf@gmai.com", "ejfwn");

DELETE FROM account WHERE id=1;