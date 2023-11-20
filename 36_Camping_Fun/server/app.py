#!/usr/bin/env python3

from models import db, Activity, Camper, Signup
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api( app )


class Campers( Resource ):

    def post( self ):
        params = request.json
        try:
            camper = Camper( name = params[ 'name' ], age = params[ 'age' ] )
        except:
            return make_response( { 'error': [ 'user messed up' ] }, 422 )
        db.session.add( camper )
        db.session.commit()
        return make_response( camper.to_dict( rules = ( '-signups', ) ), 201 )


    def get( self ):
        all_campers = [ 
            c.to_dict( rules = ( '-signups', ) ) for c in Camper.query.all() 
        ]
        return make_response( all_campers, 200 )

api.add_resource( Campers, '/campers' )





class CampersById( Resource ):
    
    def get( self, id ):
        camper = Camper.query.get( id )
        if not camper:
            return make_response( { 'error': 'camper not found' }, 404 )
        return make_response( camper.to_dict(), 200 )

    def patch( self, id ):
        camper = Camper.query.get( id )
        if not camper:
            return make_response( { 'error': 'camper not found' }, 404 )
        params = request.json
        try:
            for attr in params:
                setattr( camper, attr, params[attr] )
        except:
            return make_response( { 'error': [ 'user messed up' ] }, 422 )
        db.session.commit()

        return make_response( camper.to_dict( rules = ( '-signups', ) ), 200 )


api.add_resource( CampersById, '/campers/<id>')


class Activities( Resource ):
    def get( self ):
        return make_response( 
            [ a.to_dict() for a in Activity.query.all() ], 200 
        )

api.add_resource( Activities, '/activities' )


class ActivitiesById( Resource ):
    def delete( self, id ):
        activity = Activity.query.get( id  )
        if not activity:
            return make_response( { 'error': 'Activity not found' }, 404 )

        db.session.delete( activity )
        db.session.commit()
        return make_response( "it won't matter what we put here", 204 )

api.add_resource( ActivitiesById, '/activities/<id>' )


class Signups( Resource ):
    def post( self ):
        params = request.json
        try:
            signup = Signup( 
                time = params[ 'time' ], 
                camper_id = params[ 'camper_id'],
                activity_id = params[ 'activity_id' ]
            )
        except:
            return make_response( { 'error': [ 'all bad!' ] }, 422 )
        db.session.add( signup )
        db.session.commit()
        return make_response( 
            signup.to_dict( rules = (
                'id', 'camper_id', 'activity_id', 'time', 
                'activity', 'camper',
                '-activity.signups', '-camper.signups'
            ) ), 
            201 
        )

api.add_resource( Signups, '/signups' )


@app.route('/')
def home():
    return ''

if __name__ == '__main__':
    app.run(port=5555, debug=True)
