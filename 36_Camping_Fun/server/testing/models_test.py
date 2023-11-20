import pytest

from app import app
from models import db, Activity, Signup, Camper
from faker import Faker


class TestModels:
    '''SQLAlchemy models in models.py'''

    def test_validates_camper_name(self):
        '''require campers to have names.'''

        with app.app_context():

            with pytest.raises(ValueError):
                Camper(name=None)

            with pytest.raises(ValueError):
                Camper(name='')

    def test_validates_camper_age(self):
        '''require campers to have ages between 8 and 18, inclusive.'''

        with pytest.raises(ValueError):
            Camper(name=Faker().name(), age=0)

        with pytest.raises(ValueError):
            Camper(name=Faker().name(), age=19)

    def test_validates_signup_time(self):
        '''requires signups to have integer times between 0 and 23, inclusive.'''

        with pytest.raises(ValueError):
            Signup(time=-1)

        with pytest.raises(ValueError):
            Signup(time=24)
