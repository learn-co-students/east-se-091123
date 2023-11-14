# Flask SQLAlchemy

**SWABTs**
- Instantiate SQLAlchemy & associate with our Flask application
- Create models that inherit from SQLAlchemy
- Use Flask-Migrate to generate migrations which leverage our models to create and administrate our SQL database
- Create and update records in our database tables using instances of SQLAlchemy models

In our previous Phase when we wanted a Python class to represent (model) a table in our SQL database, we would have to write duplicate methods for each class.  Each class needed an `all` method to see all the records, each class needed a `find_by_id` method if to find one record by its ID, etc.

SQLAlchemy streamlines this for us.  By allowing our classes to inherit from SQLAlchemy, they become supercharged models well suited to modeling a database!

## Inheritance
One of the key features of Object Oriented Programming is that of inheritance.  One class can inherit from another, then have all the features of that class available.  For example:

```python
class Wizard:
    def abra_cadabra( self ):
        print( 'shazam!' )


class Person( Wizard ):
    pass

p1 = Person()
p1.abra_cadabra() # => 'shazam!'
```
As we can see the `Person` class is inheriting from `Wizard`, and as such an instance of Person can invoke a method from Wizard.

### SQLAlchemy
First, we need to import SQLAlchemy from `flask_sqlalchemy` and create an instance which we can inherit from:
```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
```
For now we can invoke SQLAlchemy without arguments, although this class does have parameters which help with database administration which we will come to later.

Once the instance of SQLAlchemy is created, our models can inherit from one of its attributes
```python
class Cat( db.Model ):
    pass
```
Here our `Cat` class is *inheriting* from `db.Model`, which gives the Cat class all the super powers it needs to be a great tool for interacting with the database.

## Flask Migrate & Alembic
When writing our own ORMs, changing the database was a bit tedious.  Adding or removing a column required SQL statements either alone or writting into methods we would have to write ourselfs.  With an additonal Python library, **Flask-Migrate** we can change our database schema simply by changing our models.

First we need to import Flask-Migrate and pass both our application instance as well as the SQLAlchemy instance as arguments
```python
from flask import flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask( __name__ )
db = SQLAlchemy()
migrate = Migrate( app, db )
```
***NOTE**:  it is not necessary to create a variable for the return value of Migrate.  This variable would be used if one wanted to make advanced changes to how Flask-Migrate interacts with our program*

Once we've hooked up Flask-Migrate to our application, new command line instructions become available to help with database administration.  First, we need to initialize the database
```
flask db init
```
This command will initialize our database environment for us.  
```
flask db migrate
```
This command creates the database file as well as a metadata table.

Once this is done we can add some required attributes to our class.
```python
class Cat( db.Model ):
    __tablename__ = 'cats'
    id = db.Column( db.Integer, primary_key = True )
```
Because our model now inherits from **db.Model**, *it's expecting* to have certin class attributes.  The dunder attribute of `__tablename__` and a primary key of `id` are the minimum requirements for Flask-Migrate to automatically create a table to match the class.  In reality, we'd want these plus any other columns for our `cats` table.
```python
class Cat( db.Model ):
    __tablename__ = 'cats'
    id = db.Column( db.Integer, primary_key = True )
    name = db.Column( db.String )
    age = db.Column( db.Integer )
```
Once our class is ready, we can create a `migration` which will add the table to our database.

## Migrations and Alembic
Flask-Migrate uses an additional libray called `Alembic` to manage the changes we make to our database.  As we create migrations it allows us to keep track of the changes made to a database over time, not unlike a git log!

To create our first migration, two things are needed.  First, our model ***needs to be in the scope of `app.py`***.

After importing our class into `app.py`, from the command line we can execute an instruction to generate our first migration.
```
flask db migrate -m 'cat model'
```
`flask db migrate` starts the creation process.  `-m 'cat model'` specifies what message to label the migration with.  "Created cats table" could be another message for the same migration.  Other migration which add or remove columns may have other messages such as, "added birthday to cats" or "removed age from users".

Once the migration is created, it needs to be "ran" or "executed" to actually change the database file.
```
flask db upgrade head
```
This will run the migration and change the database accordingly.  If we make a mistake or change our minds the migration can be un-done with the following instruction.
```
flask db downgrade
```
This will undo the most recent migration.

When changing the database it may be easier to undo a migration, but in my complex situations it may be preferential to generate antother migration.

## The Flask Shell
In our previous Phase any time we needed to test new functionality we'd run a file, commonly named `debug.py`, which had all our models in scope.  Flask provides this tool for us by default, and the prompt can be reached by executing this command at the terminal:
```
flask shell
```
This should bring us to a prompt where we can write and execute Python code, as well as have access to any of our models that are in the scope of `app.py`

## The Database Session
Previously when making changes to the database we would use commands built into Python such as `cursor.execute()` or `connection.commit()`.  With Flask-SQLAlchemy this functionality is now built into our models that inherit from `db.Model`.  With the inheritance in place all of our models will have a `query` attribute, with it's own methods.  For example:
```python
Cat.query.all()
```
...would return a list of `cat` instances.
```python
Cat.query.get( 1 )
```
...would find the `cat` with an id of 1 and return that instance, or `None` if no record with that id exists.

The `db` instance given to us by SQLAlchemy has functionality to write to the database as well.
```python
c1 = Cat( name = 'Luke', age = 5 )
db.session.add( c1 )
db.session.commit()
``` 
Just as before when writing our own ORMs, we first add our new instance of cat to the session.  Once part of the session we can commit that transaction to the database & save the new cat.

*A note on the session*:<br/>
Adding the instance to the session is needed when creating new records to the database.  Should we find one that already exists all that is needed is to commit the change to the database.
```python
cat = Cat.query.get( 1 ) # find the cat with the id of 1
cat.name = 'not luke' # change the name
db.session.commit() # save that change to the database
```

## Route Syntax
Now that we have a model to work with, as well as the tools to talk to the database, we could incorporate these into our Flask routes.  Keep in mind that we can not respond with instances, but need to convert them to simpler data structures that Flask can turn into JSON.
```python
from flask import request, make_response

@app.route( '/cats/', methods = [ 'GET', 'POST' ] )
def cats():
    if request.method = 'GET':
        all_cats = []
        for cat_instance in Cat.query.all():
            cat_dict = {
                'id': cat_instance.id,
                'name': cat_instance.name,
                'age': cat_instance.age
            }
            all_cats.append( cat_dict )
        return make_response( all_cats, 200 )
    if request.method = 'POST':
        params = request.json
        new_cat_instance = Cat( name = params['name'], age = params['age'] )
        db.session.add( new_cat_instance )
        db.session.commit()
        new_cat_dict = {
            'id': new_cat_instance.id,
            'name': new_cat_instance.name,
            'age': new_cat_instance.age
        }
        return make_response( new_cat_dict, 201 )

@app.route( '/cats/<id>', methods = [ 'GET', 'PATCH', 'DELETE' ] )
def cats_by_id( id ):
    cat = Cat.query.get( id )
    if not cat:
        return make_response( { 'error', 'cat not found' }, 404 )

    if request.method = 'GET':
        cat_dict = { 'id': cat.id, 'name': cat.name, 'age': cat.age }
        return make_response( cat_dict, 200 )

    # notice in the PATCH request we're iterating over the different keys
    # in the request body.  This way we can programmatically only change the a
    # attributes sent in the request.  The user only sent the name?  We only
    # change the name.  They send the name and age?  We change both the name
    # and age. 
    if request.method = 'PATCH':
        params = request.json
        for attr in params:
            setattr( cat, attr, params[attr] )
        db.session.commit()
        cat_dict = { 'id': cat.id, 'name': cat.name, 'age': cat.age }
        return make_response( cat_dict, 200 )

    # responding with an empty response body or not is up to the developer.
    # Would the front end need a response?
    if request.method = 'DELETE':
        db.session.delete( cat )
        db.session.commit()
        return make_response( '', 204 )
```