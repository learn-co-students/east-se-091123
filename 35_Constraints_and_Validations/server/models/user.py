
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from config import db

class User( db.Model, SerializerMixin ):
    __tablename__ = 'users'

    id = db.Column( db.Integer, primary_key = True )
    name = db.Column( db.String )
    age = db.Column( db.Integer )



    # validations are at the PYTHON level
    @validates( 'name' )
    def validates_name( self, key, name ):
        if len( new_name ) < 2:
            raise ValueError( 'name must be longer than 2 characters' )
        return new_name



    # constraints are at the DATABASE level
    __table_args__ = (
        db.CheckConstraint( 'age >= 18' ),
    )