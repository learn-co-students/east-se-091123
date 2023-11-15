
from flask import request, make_response
from flask_restful import Resource

from config import app, db, api

from models.cat import Cat


class Cats(Resource):
    def get(self):
        cats = [ cat.to_dict(only=('name',)) for cat in Cat.query.all() ]
        return make_response( cats, 200 )

    def post(self):
        params = request.json
        new_cat = Cat( name = params['name'], age = params['age'] )
        db.session.add( new_cat )
        db.session.commit()
        return make_response( new_cat.to_dict(rules=('created_at',)), 201 )

api.add_resource(Cats, '/cats')
@app.before_request()

class CatById(Resource):
    def get(self, id):
        cat = Cat.query.get( id )
        if not cat:
            return make_response( { 'error': 'cat not found' }, 404 )
        return make_response( cat.to_dict(), 200 )
    
    def patch(self, id):
        cat = Cat.query.get( id )
        if not cat:
            return make_response( { 'error': 'cat not found' }, 404 )
        params = request.json
        for attr in params:
            setattr( cat, attr, params[attr] )
        db.session.commit()
        return make_response( cat.to_dict(rules=('updated_at',)), 200 )

    def delete(self, id):
        cat = Cat.query.get( id )
        if not cat:
            return make_response( { 'error': 'cat not found' }, 404 )
        db.session.delete( cat )
        db.session.commit()
        return make_response( '', 204 )

api.add_resource(CatById, '/cats/<int:id>')
