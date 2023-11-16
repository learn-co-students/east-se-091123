
from flask import request
from config import app

from models.user import User


@app.route( '/users', methods = [ 'GET', 'POST' ] )
def users():
    if request.method == 'GET':
        return [ user.to_dict() for user in User.query.all() ]
    

    # the following is pseudocode introducing how we could handle different
    # responses


    # if request.method == 'POST':

    #     try:
    #         user = User(???)
    #     except:
    #         return make_response( { 'error': 'user messed up'}, 422 )

    #     db.session.add( user )

    #     try:
    #         db.session.commit()
    #     except:
    #         return make_response( { 'error': 'user messed up'}, 422 )
        
    #     return make_response( user.to_dict(), 201 )
