#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Production

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        Production.query.delete()

        productions = []
    
        p1 = Production(title='Hamlet', genre= 'Drama', director='Bill Shakespeare', description='The Tragedy of Hamlet, Prince of Denmark', budget= 100000.00, image='https://upload.wikimedia.org/wikipedia/commons/6/6a/Edwin_Booth_Hamlet_1870.jpg', ongoing=True)
        
        productions.append(p1)

        p2 = Production(title='Cats', genre='Musical', director='Andrew Lloyd Webber', description=' Jellicles cats sing and dance', budget=200000.00, image='https://upload.wikimedia.org/wikipedia/en/3/3e/CatsMusicalLogo.jpg', ongoing=True)
        
        productions.append(p2)

        p3 = Production(title='Carmen', genre='Opera', director='Georges Bizet', description='Set in southern Spain this is the story of the downfall of Don José, a naïve soldier who is seduced by the wiles of the fiery and beautiful Carmen.', budget=200000.00, image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Prudent-Louis_Leray_-_Poster_for_the_premi%C3%A8re_of_Georges_Bizet%27s_Carmen.jpg/300px-Prudent-Louis_Leray_-_Poster_for_the_premi%C3%A8re_of_Georges_Bizet%27s_Carmen.jpg', ongoing=False)
        
        productions.append(p3)

        p4 = Production(title= 'Hamilton', genre= 'Musical', director='Lin-Manuel Miranda', description='An American Musical is a sung-and-rapped-through musical by Lin-Manuel Miranda. It tells the story of American Founding Father Alexander Hamilton.', budget= 400000.00, image='https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Hamilton-poster.jpg/220px-Hamilton-poster.jpg',ongoing=False)
        
        productions.append(p4)

        db.session.add_all(productions)
        db.session.commit()
