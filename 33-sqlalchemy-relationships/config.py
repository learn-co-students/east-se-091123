from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api
from sqlalchemy import MetaData

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

app = Flask( __name__ )

app.config[ 'SQLALCHEMY_DATABASE_URI' ] = 'sqlite:///development.db'
app.config[ 'SQLALCHEMY_TRACK_MODIFICATIONS' ] = False

db = SQLAlchemy(metadata=metadata)

migrate = Migrate( app, db )

db.init_app( app )

api = Api(app)