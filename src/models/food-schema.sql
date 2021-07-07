DROP TABLE IF EXISTS food;

CREATE TABLE food(
  id SERIAL PRIMARY KEY,
  type varchar(255),
  price INT
);