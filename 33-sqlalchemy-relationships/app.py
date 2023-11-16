
from flask import request, make_response
from flask_restful import Resource

from config import app, db, api

from models import User, Post, Comment

class Posts(Resource):
    def get(self):
        pass

api.add_resource(Posts, '/posts')

class PostComments(Resource):
    def get(self, post_id):
        pass

api.add_resource(PostComments, '/posts/<int:post_id>/comments')