from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    serialize_rules = ('-comments.user',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    comments = db.relationship('Comment', 
                                back_populates='user', 
                                cascade='all, delete-orphan')
    commented_posts = association_proxy('comments', 'post')

    def __repr__(self):
        return f'<User {self.id}, {self.name}>'


class Post(db.Model, SerializerMixin):
    __tablename__ = 'posts'
    serialize_rules = ('-comments.post',)

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    body = db.Column(db.String)

    comments = db.relationship('Comment', back_populates='post', cascade='all, delete-orphan')
    users = association_proxy('comments', 'user')

    def __repr__(self):
        return f'<Post {self.id}, {self.title}, {self.body}>'


class Comment(db.Model, SerializerMixin):
    __tablename__ = 'comments'
    serialize_rules = ('-user.comments', '-post.comments', '-user_id', '-post_id',)

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))

    user = db.relationship('User', back_populates='comments')
    post = db.relationship('Post', back_populates='comments')

    def __repr__(self):
        return f'<Comment {self.id}, {self.content}, post_id={self.post_id}, user_id={self.user_id}>'