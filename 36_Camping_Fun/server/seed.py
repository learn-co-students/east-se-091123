from random import randint, choice as rc

from faker import Faker

from app import app
from models import db, Activity, Signup, Camper

fake = Faker()


def create_activities():
    activities = []
    for _ in range(10):
        a = Activity(
            name=fake.sentence(),
            difficulty=randint(1, 5)
        )
        activities.append(a)

    return activities


def create_campers():
    campers = []
    for _ in range(5):
        c = Camper(
            name=fake.name(),
            age=rc(range(8, 19))
        )
        campers.append(c)

    return campers


def create_signups(activities, campers):
    signups = []
    for _ in range(20):
        s = Signup(
            time=rc(range(24)),
            camper_id=rc([camper.id for camper in campers]),
            activity_id=rc([activity.id for activity in activities])
        )
        signups.append(s)

    return signups


if __name__ == '__main__':

    with app.app_context():
        print("Clearing db...")
        Activity.query.delete()
        Signup.query.delete()
        Camper.query.delete()

        print("Seeding activities...")
        activities = create_activities()
        db.session.add_all(activities)
        db.session.commit()

        print("Seeding campers...")
        campers = create_campers()
        db.session.add_all(campers)
        db.session.commit()

        print("Seeding signups...")
        signups = create_signups(activities, campers)
        db.session.add_all(signups)
        db.session.commit()

        print("Done seeding!")
