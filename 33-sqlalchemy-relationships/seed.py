from app import app, db
from models import User, Post, Comment

with app.app_context():
    User.query.delete()
    Post.query.delete()
    Comment.query.delete()

    u1 = User(name="Emiley")
    u2 = User(name="Adam")

    db.session.add_all([u1, u2])
    db.session.commit()

    p1 = Post(title="Lecture today", 
            body="We are learning sqlalchemy relationships.")
    p2 = Post(title="Lecture tomorrow", 
            body="We are learning constraints and validations.")

    db.session.add_all([p1, p2])
    db.session.commit()

    c1 = Comment(content="Don't forget to delete the joins!",
                user=u2,
                post=p1)
    c2 = Comment(content="It's like magic!",
                user=u1,
                post=p1)
    c3 = Comment(content="Love this lecture!",
                user=u1,
                post=p2)

    db.session.add_all([c1, c2, c3])
    db.session.commit()