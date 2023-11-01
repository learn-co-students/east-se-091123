# SQL Databases

Up until now we've been keeping all of our data in class attributes.  While this is good for learning how to work with data, and how that data relates to each other, there are more efficient ways to save our data.

## The Structured Query Language
Initially developed at IBM in the early 1970s, SQL (pronounced see-quel or es-que-el) exploded in popularity and by the mid 1980s was standardized into a specific language.  Since then many different "accents" or "flavors" of SQL have added to this inital standard, some of which include:

- MySQL
- PostgreSQL
- Microsoft SQL Server
- Oracle DB
- SQLite

While all of these are SQL, they're different insofar as each has added different capabilities to the ways they read and write information to the database.

For example, people in California, New York, England & Scotland all speak english but the dialects are different.  There may be words spoken in Scottish english that wouldn't be understood in Californian english.

## SQLite
For the remainder of our time we'll be using SQLite for our data storage needs.  Incrediblely popular (if you have an iPhone then your phone is using it), SQLite is a fast, lightweight implimentation of the SQL language.

While it doesn't have some of the additional features of PostgreSQL or MySQL, SQLite is a fast & lightweight option well suited for anything from to-do lists to website back ends!

## Database Tables

Our SQL database files are `binary` files which contain one or more `tables`.  Kinda like a spreadsheet, a table is nothing more than a collection of rows and columns, for example:

### CATS

| id | name | age |
| --- | --- | --- |
| 1 | Luke | 4
| 2 | Leia | 4
| 3 | Rose | 7


If we look at the above as a table in our SQL database, we can see that the CATS table has three columns: `id`, `name`, and `age`.  These columns in our table can be thought of as the *attributes of our Python classes*.

```
As a rule, every entry in a SQL database will have a unique id, or "primary key"
```

## SQL Syntax
So if everything in a SQL database is a table, the first thing we need to do is create a table!

```sql
CREATE TABLE cats (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER
);
```

Then we can add something to the table!
```sql
INSERT INTO cats ( name, age ) VALUES ( 'Luke', 4 )
```
We can read all records from our table!
```sql
SELECT * FROM cats;
```
Or if we just wanted certain columns
```sql
SELECT name, age FROM cats;
```
We can change a row!
```sql
UPDATE cats SET name = 'potato' WHERE id = 1;
```
We can delete a row!
```sql
DELETE FROM cats WHERE id = 1
```

We can add a new column to our table!
```sql
ALTER TABLE cats ADD COLUMN owner TEXT;
```
We can change a column's name!
```sql
ALTER TABLE cats RENAME COLUMN owner TO meowzer;
```
We can remove a column!
```sql
ALTER TABLE cats DROP COLUMN meowzer;
```
