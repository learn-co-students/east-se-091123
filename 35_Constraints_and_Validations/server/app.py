from flask import request, make_response
from sqlalchemy.exc import IntegrityError

from config import app, db

from models.user import User
from models.note import Note

@app.route( '/users', methods = [ 'GET', 'POST' ] )
def users():

    if request.method == 'GET':
        return make_response( [ u.to_dict() for u in User.query.all() ] )

    if request.method == 'POST':
        params = request.json
        
        # with 'validations', it doesn't concern the database to CREATING
        # THE INSTANCE is what throws the error
        try:
            new_user = User( name = params['name'], age = params['age'] )
        except ValueError as v_error:
            return make_response( { 'error': str( v_error ) }, 422 )

        
        db.session.add( new_user )

        # this is what throws the error on 'constraints':
        try:
            db.session.commit() # this 
        except IntegrityError as i_error:

            # SQLAlchemy error messages are a bit verbose so this is us checking
            # for our specific constraint and giving a nicer message
            if 'age' in str( i_error ):
                return make_response( { 'error': 'must be 18 or over' }, 422 )
            
            else:
                return make_response( { 'error': str( i_error ) }, 422 )

        return make_response( new_user.to_dict(), 201 )