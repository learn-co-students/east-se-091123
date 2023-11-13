from flask import Flask, make_response, request

app = Flask(__name__)

@app.route('/cats', methods=['GET', 'POST'])
def cats():
    if request.method == 'GET':
        # do some stuff here like get all the cats from db
        return make_response('some string but later we want the cats in json', 200)
    elif request.method == 'POST':
        # handle creating a new cat with the info the body
        data = request.get_json()
        return make_response(f"The cat's name is {data['name']}", 201 )

@app.route('/cats/<id>', methods=['GET', 'PATCH', 'DELETE'])
def cat_by_id(id):
    # import ipdb; ipdb.set_trace()
    return 'hello world from cats by id'

# If we want to start the application with "flask run" we need to first set
# two environment variables from the command line:
#
# export FLASK_APP=app.py
# export FLASK_RUN_PORT=5555
#
# after setting those two we can run "flask run --debug" from the command line.

# if we don't use "flask run" we need to run python directly on the app.py file
# so the following line hits.
if __name__ == '__main__':
    app.run(port=5555, debug=True)