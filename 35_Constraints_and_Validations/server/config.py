from flask import Flask
from sqlalchemy import MetaData
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask( __name__ )
app.config[ 'SQLALCHEMY_DATABASE_URI' ] = 'sqlite:///funstuff.db'
app.config[ 'SQLALCHEMY_TRACK_MODIFICATIONS' ] = False

md = MetaData( naming_convention = {
    'fk': 'fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s'
} )

db = SQLAlchemy( metadata = md )

Migrate( app, db )

db.init_app( app )
