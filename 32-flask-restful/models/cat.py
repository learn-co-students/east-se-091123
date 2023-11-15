from sqlalchemy_serializer import SerializerMixin
from config import db

class Cat( db.Model, SerializerMixin ):
    __tablename__ = 'cats'
    serialize_rules = ('-updated_at', '-created_at',)

    id = db.Column( db.Integer, primary_key = True )
    name = db.Column( db.String )
    age = db.Column( db.Integer )
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    # def as_dict( self ):
    #     # this returns a dictionary version of the instance
    #     return { 'id': self.id, 'name': self.name, 'age': self.age }

