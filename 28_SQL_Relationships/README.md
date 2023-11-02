# SQL Relationships

SQL is a language designed to talk to *relational databases*, databases containing multiple tables which can be related to each other.  Moreover two tables relate to each other you can query information from both tables simultaneously!

## The Python Example
So far we've been relating instances of classes to each other.  When an object *belongs to* another, that object is passed an argument of another instance to create that relationship.  For example:
```python
class Zoo:
    def __init__( self, name ):
        self.name = name

class Animal:
    def __init__( self, nickname, zoo_instance ):
        self.nickname = nickname
        self.zoo = zoo_instance

bz = Zoo( 'Bronx Zoo' )
tg = Animal( 'Ted the Tiger', bz )
```
Calling `tg.zoo` would return our Zoo instance, the Bronx Zoo, establishing our *belongs to* relationship.

But what if we wanted to see all the animals in the Bronx Zoo.  With Python instances we would start by adding functionality to the Animal class to have a record of our our animals.  With the ability to see all the animal instances, we could then add a method to the Zoo class that would find the ones in that Zoo.

```python
class Zoo:
    def __init__( self, name ):
        self.name = name

    def animals( self ):
        return [ a for a in Animal.all if a.zoo == self ]

class Animal:
    all = []
    def __init__( self, nickname, zoo_instance ):
        self.nickname = nickname
        self.zoo = zoo_instance
        Animal.all.append( self )

bz = Zoo( 'Bronx Zoo' )
tg = Animal( 'Ted the Tiger', bz )
```
Now by calling `bz.animals()` we could see all of the Animal instances that are associated with a particular Zoo!

## The SQL Equivalent

In SQL we don't have instances to compare.  All of the data in our database tables are simpler data types such as `TEXT` or `INTEGER`.  So instead of giving our Animal a `zoo` attribute of an instance, in SQL we can give our table a `foreign key`.

### Primary Keys

Everything row in a SQL database should have an `ID` of an integer, which acts as it's `PRIMARY KEY`.  We see an example of this with a `CREATE TABLE` statement:
```SQL
CREATE TABLE zoos (
  id INTEGER PRIMARY KEY,
  name TEXT
);
```
This integer of `id`, because it is a `primary key` is always guaranteed to be unique & can be used as a reference to that row.  If we were to put the Bronx Zoo in our table of Zoos...
```sql
INSERT INTO zoos ( name ) VALUES ( 'Bronx Zoo' );
```
...we would see the record with a new id.
| id | name |
|--- | --- |
| 1 | Bronx Zoo

### Foreign Keys

Since we can't use Python instances anymore, instead we give the Animals table an additional column ***to hold the id of the zoo it belongs to***.

```sql
CREATE TABLE animals (
  id INTEGER PRIMARY KEY,
  nickname TEXT,
  zoo_id INTEGER
);
```
Here we see the animals table being created with an additional column to hold the `id` of the Zoo.  Since we know the `id` of the Bronx Zoo is one, we can create a new row with the relationship established.

```sql
INSERT INTO animals ( nickname, zoo_id ) VALUES ( 'Ted the Tiger', 1 );
INSERT INTO animals ( nickname, zoo_id ) VALUES ( 'Jake the Giraffe', 1 );
INSERT INTO animals ( nickname, zoo_id ) VALUES ( 'Sam the Snake', 1 );
```
Which should populate our Animals table like so:
| id | nickname | zoo_id 
| --- | --- | ---
| 1 | Ted the Tiger | 1
| 2 | Jake the Giraffe | 1
| 3 | Sam the Snake | 1

Finding the zoo an animal *belongs to* can be done with a simple `SELECT` statment:
```sql
SELECT * FROM zoos WHERE id = 1;
```
Selecting all of the animals in a zoo can be done the same way, only this time referencing *the foreign key*:
```sql
SELECT * FROM animals WHERE zoo_id = 1
```

## Many to Many Relationships
What if the animal is on tour?  If the `zoo_id` column can only hold one integer, it can only *belong to* one zoo.  For a zoo to *have many* animals, and for a (traveling) animal to *have many* zoos.  We need a `join table`.

### Join Tables
Simply put a `join table` is nothing more than a table that *belongs to* two others.  By giving the join table two foreign keys, we could use them in a `JOIN` statement.  First let's create our three tables:

```sql
CREATE TABLE zoos (
  id INTEGER PRIMARY KEY,
  name TEXT
);
CREATE TABLE animals (
  id INTEGER PRIMARY KEY,
  nickname TEXT
);
CREATE TABLE animal_zoos (
  id INTEGER PRIMARY KEY,
  animal_id INTEGER,
  zoo_id INTEGER
);
```
Notice how the foreign key from our Animals table is now gone, and our new `animal_zoos` table has two foreign keys.  After inserting a number of records we could have three tables that look like this:

#### Animals
| id | nickname 
| --- | --- |
| 1 | Ted the Tiger 
| 2 | Jake the Giraffe 
| 3 | Sam the Snake 

#### Zoos
| id | nickname 
| --- | --- |
| 1 | Bronx Zoo
| 2 | Micke Grove Zoo

#### Animal Zoos
| id | animal_id | zoo_id
| --- | --- | ---
| 1 | 1 | 1
| 2 | 2 | 1
| 3 | 3 | 1
| 4 | 3 | 2

As we can see the join table, `animal_zoos` is keeping track of which animal was at which zoo.  The first three records show all three animals at the Bronx Zoo, but the fourth record shows the animal with `id` of `3` related to a different zoo.  Looks like Sam the Snake when to a different zoo!

### JOIN statments
If we wanted all the zoos that Sam the Snake went to, and we know that Sam's primary key is 3, we could the the follwing SQL statement.
```sql
SELECT zoos.* FROM zoos
JOIN animal_zoos ON zoos.id = animal_zoos.zoo_id 
WHERE animal_zoos.animal_id = 3
```
Conversely if we wanted all the animals in the Bronx Zoo, and we know its id (or primary key) is 1:
```sql
SELECT animals.* FROM animals
JOIN animal_zoos ON animals.id = animal_zoos.animal 
WHERE animal_zoos.zoo_id = 1
```
Let's unpack that a bit:
```sql
SELECT animals.*
```
JOIN statements bring records from the other tables into scope.  If we said `SELECT *` we would of gotten results from multiple talbes.  By using the table name in the syntax we're saying, "give us everything from the animals table".
```sql
SELECT animals.* FROM animals
JOIN animal_zoos ON animals.id = animal_zoos.animal 
```
`SELECT animals.* FROM animals` brings columns from the animals table in scope.  But we need to only have certain animals, and the records of which ones are on another table.  The `JOIN` statement brings another table into scope and allows us to only have records where *the animal's `ID` matches the animal_zoo's `foreign key` of animal_id.
```sql
SELECT animals.* FROM animals
JOIN animal_zoos ON animals.id = animal_zoos.animal 
WHERE animal_zoos.zoo_id = 1
```
Finally, we filter the which animals by a column in our join table, only selecting ones where the `zoo_id = 1`.

The Zoo has many animals *through* the join table of animal_zoos.

Has many through!