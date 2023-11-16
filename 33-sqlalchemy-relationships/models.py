from sqlalchemy_serializer import SerializerMixin

from config import db


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    def __repr__(self):
        return f'<User {self.id}, {self.name}>'


class Post(db.Model, SerializerMixin):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    body = db.Column(db.String)

    def __repr__(self):
        return f'<Post {self.id}, {self.title}, {self.body}>'


class Comment(db.Model, SerializerMixin):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String)

    def __repr__(self):
        return f'<Comment {self.id}, {self.content}>'