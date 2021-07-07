DROP TABLE IF EXISTS clothes;

CREATE TABLE clothes(
  id SERIAL PRIMARY KEY,
  type varchar(255),
  price INT
);