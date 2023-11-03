
import sqlite3

# this connects us to the database
connection = sqlite3.connect( 'funstuff.db' )
# this creates a tool where we can talk to the database
cursor = connection.cursor()


class Zoo:
    def __init__( self, name, location, id = None ):
        self.name = name
        self.location = location
        self.id = id

    @classmethod
    def all( cls ):
        sql = 'SELECT * FROM zoos'
        list_of_tuples = cursor.execute( sql ).fetchall()
        return [ Zoo.from_db( row ) for row in list_of_tuples ]

    @classmethod
    def from_db( cls, row_tuple ):
        zoo_instance = Zoo( row_tuple[1], row_tuple[2] )
        zoo_instance.id = row_tuple[0]
        return zoo_instance

    def __repr__( self ):
        return f'<Zoo id: {self.id} name: {self.name} location: {self.location}>'


class Animal:

    def __init__( self, nickname, id = None ):
        self.nickname = nickname
        self.id = id


    def visit_zoo( self, zoo_instance ):
        sql = 'INSERT INTO visits ( zoo_id, animal_id ) VALUES ( ?, ? )'
        params_tuple = ( zoo_instance.id, self.id )
        cursor.execute( sql, params_tuple )
        connection.commit()

    @classmethod
    def erase_table( cls ):
        sql = 'DELETE FROM animals'
        cursor.execute( sql )
        connection.commit()


    @classmethod
    def create_table( cls ):
        sql = '''
            CREATE TABLE animals (
                id INTEGER PRIMARY KEY,
                nickname TEXT
            )
        '''
        cursor.execute( sql )

    def zoos( self ):
        sql = '''
            SELECT DISTINCT zoos.* FROM ZOOS
            JOIN visits ON visits.zoo_id = zoos.id
            WHERE visits.animal_id = ?
        '''
        params_tuple = ( self.id, )
        list_of_tuples = cursor.execute( sql, params_tuple ).fetchall()
        return [ Zoo.from_db( row ) for row in list_of_tuples ]


    def destroy( self ):
        sql = 'DELETE FROM animals WHERE id = ?'
        params_tuple = ( self.id, )
        cursor.execute( sql, params_tuple )
        connection.commit()
        self.id = None

    def save( self ):
        if self.id:
            sql = f'UPDATE animals SET nickname = ? WHERE id = ?'
            params_tuple = ( self.nickname, self.id )
            cursor.execute( sql, params_tuple )
            # any time we want to change the database, our 'cursor.execute()'
            # will be followed by 'connection.commit()' to commit those changes
            # to the database
            connection.commit()
        else:
            sql = 'INSERT INTO animals ( nickname ) VALUES ( ? )'
            params_tuple = ( self.nickname, )
            cursor.execute( sql, params_tuple )
            connection.commit()
            id_sql = 'SELECT LAST_INSERT_ROWID() FROM animals'
            new_id_tuple = cursor.execute( id_sql ).fetchone()
            self.id = new_id_tuple[0]

    # given a row from the database as a tuple, return a new Animal instance
    # with that info from the database
    @classmethod
    def from_db( cls, row_tuple ):
        animal_instance = Animal( row_tuple[1] )
        animal_instance.id = row_tuple[0]
        return animal_instance

    @classmethod
    def all( cls ):
        sql = 'SELECT * FROM animals'
        list_of_tuples = cursor.execute( sql ).fetchall()
        return [ Animal.from_db( row ) for row in list_of_tuples ]



    def __repr__( self ):
        return f'<Animal id: {self.id} name: {self.nickname}>'


# EXAMPLE BELOW IS A COMMAND LINE INTERFACE, OR "CLI"

# We trap the user in a while loop, giving the user an opportunity to change
# the value of the 'user_input' variable with the input() function. 

user_input = 'some value'

print( '\nWelcome to the Animal Zoo tracker!\n\n')
while user_input != 'x':
    # value of user input is redefined
    user_input = input( '<3 ' )
    # there's only two choices, 'a' to see animal names or 'x' to quit.
    if user_input == 'a':
        for animal in Animal.all():
            print( animal.nickname )
    elif user_input == 'x':
        print( 'goodbye' )

