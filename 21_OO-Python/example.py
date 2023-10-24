import ipdb

class Human:

    # the __init__ method runs once every time a new instance is created
    def __init__( self, name_given, age_given ):
        # "self" refers to the particular instance
        self.name = name_given # 'name' here is a "attribute"
        self.age = age_given

    def say_hello( self ):
        print( f"What's up y'all!  {self.name} is here to partaay!" )


    #properties are special ways to protect an attribute
    def get_name( self ):
        print( 'reading the name!')
        return self._name

    def set_name( self, new_name ):
        print( 'changing the name!!!!!!!!!')
        if type( new_name ) == str:
            self._name = new_name
        else:
            raise ValueError( 'name must be a string!' )

    name = property( get_name, set_name )


    @property
    def age( self ):
        return self._age

    @age.setter
    def age( self, new_age ):
        if new_age < 18:
            raise ValueError( 'must be 18 or over!' )
        else:
            self._age = new_age



h1 = Human( 'adam', 93 )
h2 = Human( 'emiley', 31 )


ipdb.set_trace()










