
from flask import request, make_response

from config import app, db

from models.cat import Cat

@app.route( '/cats', methods = [ 'GET', 'POST' ] )
def cats():
    if request.method == 'GET':
        # using the new as_dict() instance method instead of making a 
        # dictionary by hand
        cats = [ cat.as_dict() for cat in Cat.query.all() ]
        return make_response( cats, 200 )

    if request.method == 'POST':
        # getting the data from the body of the request
        params = request.json

        # creating a new instance with the request body data
        new_cat = Cat( name = params['name'], age = params['age'] )
        
        # saving that new instance to the database
        db.session.add( new_cat )
        db.session.commit()
        
        # creating a new dictionary from our instance to send back in the 
        # response
        cat_dict = { 
            'id': new_cat.id, 'name': new_cat.name, 'age': new_cat.age 
        }

        # sending back the response
        return make_response( cat_dict, 201 )

@app.route( '/cats/<id>', methods = [ 'GET', 'PATCH', 'DELETE' ] )
def cats_by_id( id  ):
    cat = Cat.query.get( id )
    if not cat:
        return make_response( { 'error': 'cat not found' }, 404 )

    if request.method == 'GET':
        return make_response( cat.as_dict(), 200 )

    if request.method == 'PATCH':
        params = request.json
        for attr in params:
            setattr( cat, attr, params[attr] )
        db.session.commit()
        return make_response( cat.as_dict(), 200 )

    if request.method == 'DELETE':
        db.session.delete( cat )
        db.session.commit()
        return make_response( '', 204 )