# Flask Mock Challenge - Camping Fun

Congratulations! You have been hired by Access Camp and for your first job, you
have been tasked with building out a website to log campers with their
activities.

In this repo:

- There is a Flask application with some features built out.
- There is a fully built React frontend application.
- There are tests included which you can run using `pytest -x`.
- There is a file `mock-challenge-camping-fun.postman_collection.json` that
  contains a Postman collection of requests for testing each route you will
  implement.

Depending on your preference, you can either check your API by:

- Using Postman to make requests
- Running `pytest -x` and seeing if your code passes the tests
- Running the React application in the browser and interacting with the API via
  the frontend

You can import `mock-challenge-camping-fun.postman_collection.json` into Postman
by pressing the `Import` button.

![import postman](https://curriculum-content.s3.amazonaws.com/6130/phase-4-code-challenge-instructions/import_collection.png)

Select `Upload Files`, navigate to this repo folder, and select
`mock-challenge-camping-fun.postman_collection.json` as the file to import.

---

## Setup

To download the dependencies for the frontend and backend, run:

```console
pipenv install
pipenv shell
npm install --prefix client
```

You can run your Flask API on [`localhost:5555`](http://localhost:5555) by
running:

```console
python server/app.py
```

You can run your React app on [`localhost:4000`](http://localhost:4000) by
running:

```sh
npm start --prefix client
```

You are not being assessed on React, and you don't have to update any of the
React code; the frontend code is available just so that you can test out the
behavior of your API in a realistic setting.

Your job is to build out the Flask API to add the functionality described in the
deliverables below.

---

## Models

You will implement an API for the following data model:

![domain diagram](https://curriculum-content.s3.amazonaws.com/6130/mock-challenge-camping/diagram.png)

The file `server/models.py` defines the model classes **without relationships**.
Use the following commands to create the initial database `app.db`:

```console
cd server
flask db init
flask db migrate -m 'initial model'
flask db upgrade head
```

Now you can implement the relationships as shown in the ER Diagram:

- A `Camper` has many `Activity`s through `Signup`s
- An `Activity` has many `Camper`s through `Signup`s
- A `Signup` belongs to a `Camper` and belongs to a `Activity`

Update `server/models.py` to establish the model relationships. Since a `Signup`
belongs to a `Camper` and an `Activity`, configure the model to cascade deletes.

Set serialization rules to limit the recursion depth.

Run the migrations and seed the database:

```console
flask db migrate -m 'implement relationships'
flask db upgrade head
python seed.py
```

> If you aren't able to get the provided seed file working, you are welcome to
> generate your own seed data to test the application.

---

## Validations

Add validations to the `Camper` model:

- must have a `name`
- must have an `age` between 8 and 18

Add validations to the `Signup` model:

- must have a `time` between 0 and 23 (referring to the hour of day for the
  activity)

---

## Routes

Set up the following routes. Make sure to return JSON data in the format
specified along with the appropriate HTTP verb.

Recall you can specify fields to include or exclude when serializing a model
instance to a dictionary using to_dict() (don't forget the comma if specifying a
single field).

NOTE: If you choose to implement a Flask-RESTful app, you need to add code to
instantiate the `Api` class in server/app.py.

### GET /campers

Return JSON data in the format below. **Note**: you should return a JSON
response in this format, without any additional nested data related to each
camper's signups.

```json
[
  {
    "id": 1,
    "name": "Caitlin",
    "age": 8
  },
  {
    "id": 2,
    "name": "Lizzie",
    "age": 9
  }
]
```

### GET /campers/<int:id>

If the `Camper` exists, return JSON data in the format below. Make sure to
include a list of signups for the camper.

```json
{
  "age": 12,
  "id": 1,
  "name": "Nicholas Martinez",
  "signups": [
    {
      "activity": {
        "difficulty": 2,
        "id": 5,
        "name": "Hiking by the stream."
      },
      "activity_id": 5,
      "camper_id": 1,
      "id": 39,
      "time": 8
    },
    {
      "activity": {
        "difficulty": 1,
        "id": 7,
        "name": "Listening to the birds chirp."
      },
      "activity_id": 7,
      "camper_id": 1,
      "id": 42,
      "time": 1
    }
  ]
}
```

If the `Camper` does not exist, return the following JSON data, along with the
appropriate HTTP status code:

```json
{
  "error": "Camper not found"
}
```

### PATCH /campers/:id

This route should update an existing `Camper`. It should accept an object with
the following properties in the body of the request:

```json
{
  "name": "some name",
  "age": 10
}
```

If the `Camper` exists and is updated successfully (passes validations), update
its name and age and return JSON data in the format below (exclude the signups):

```json
{
  "id": 1,
  "name": "some name",
  "age": 10
}
```

If the `Camper` does not exist, return the following JSON data, along with the
appropriate HTTP status code:

```json
{
  "error": "Camper not found"
}
```

If the `Camper` is **not** updated successfully (does not pass validations),
return the following JSON data, along with the appropriate HTTP status code:

```json
{
  "errors": ["validation errors"]
}
```

### POST /campers

This route should create a new `Camper`. It should accept an object with the
following properties in the body of the request:

```json
{
  "name": "Zoe",
  "age": 11
}
```

If the `Camper` is created successfully, send back a response with the new
`Camper`:

```json
{
  "id": 2,
  "name": "Zoe",
  "age": 11
}
```

If the `Camper` is **not** created successfully, return the following JSON data,
along with the appropriate HTTP status code.

```json
{ "errors": ["validation errors"] }
```

### GET /activities

Return JSON data in the format below:

```json
[
  {
    "id": 1,
    "name": "Archery",
    "difficulty": 2
  },
  {
    "id": 2,
    "name": "Swimming",
    "difficulty": 3
  }
]
```

### DELETE /activities/<int:id>

If the `Activity` exists, it should be removed from the database, along with any
`Signup`s that are associated with it (a `Signup` belongs to an `Activity`. If
you did not set up your models to cascade deletes, you need to delete associated
`Signups` before the `Activity` can be deleted.

After deleting the `Activity`, return an _empty_ response body, along with the
appropriate HTTP status code.

If the `Activity` does not exist, return the following JSON data, along with the
appropriate HTTP status code:

```json
{
  "error": "Activity not found"
}
```

### POST /signups

This route should create a new `Signup` that is associated with an existing
`Camper` and `Activity`. It should accept an object with the following
properties in the body of the request:

```json
{
  "camper_id": 1,
  "activity_id": 3,
  "time": 9
}
```

If the `Signup` is created successfully, send back a response with the data
related to the new `Signup`:

```json
{
  "id": 100,
  "camper_id": 1,
  "activity_id": 3,
  "time": 9,
  "activity": {
    "difficulty": 3,
    "id": 3,
    "name": "Swim in the lake."
  },
  "camper": {
    "age": 11,
    "id": 1,
    "name": "Ashley Delgado"
  }
}
```

If the `Signup` is **not** created successfully, return the following JSON data,
along with the appropriate HTTP status code:

```json
{ "errors": ["validation errors"] }
```
