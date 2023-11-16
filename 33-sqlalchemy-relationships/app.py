
from flask import request, make_response
from flask_restful import Resource

from config import app, db, api

from models import Post, Comment

class Posts(Resource):
    def get(self):
        posts = [ post.to_dict() for post in Post.query.all() ]
        return make_response( posts, 200 )

api.add_resource(Posts, '/posts')

class PostById(Resource):
    def delete(self, id):
        post = Post.query.get( id )
        if not post:
            return make_response( { 'error': 'post not found' }, 404 )
        db.session.delete( post )
        db.session.commit()
        return make_response( '', 204 )
api.add_resource(PostById, '/posts/<int:id>')

class PostComments(Resource):
    def get(self, post_id):
        post = Post.query.get( post_id )
        if not post:
            return make_response( { 'error': 'post not found' }, 404 )
        # need to get the post's comments and serialize them
        comments = [comment.to_dict() for comment in post.comments]
        return make_response( comments, 200 )

api.add_resource(PostComments, '/posts/<int:post_id>/comments')