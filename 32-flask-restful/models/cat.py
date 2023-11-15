
from config import db

class Cat( db.Model ):
    __tablename__ = 'cats'

    id = db.Column( db.Integer, primary_key = True )
    name = db.Column( db.String )
    age = db.Column( db.Integer )

    def as_dict( self ):
        # this returns a dictionary version of the instance
        return { 'id': self.id, 'name': self.name, 'age': self.age }

