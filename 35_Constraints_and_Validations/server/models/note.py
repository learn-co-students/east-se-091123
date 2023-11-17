
from config import db

class Note( db.Model ):
    __tablename__ = 'notes'

    id = db.Column( db.Integer, primary_key = True )

    content = db.Column( db.String )

    user_id = db.Column( db.Integer, db.ForeignKey( 'users.id' ) )
