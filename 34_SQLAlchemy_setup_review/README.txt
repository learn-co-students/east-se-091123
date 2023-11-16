

DATABASE CLI INSTRUCTIONS
    -after all config is done, imports, db variable, etc...


flask db init
    -creates the different files & directories needed to 
     work with the database

flask db migrate
    -creates the actual database file

flask db migrate -m 'some message'
    -only works once a new model is written AND that model is
     in scope in app.py

flask db upgrade
    -run the migration, and change the database