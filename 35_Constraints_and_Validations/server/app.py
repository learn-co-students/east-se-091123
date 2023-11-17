from flask import request, make_response
from config import app, db

@app.route( '/users', methods = [ 'GET', 'POST' ] )
def users():

    if request.method == 'GET':
        return make_response( [ 'all the users?' ] )

    if request.method == 'POST':
        return make_response( { 'id': 'create a user?' }, 201 )