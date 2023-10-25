import ipdb

class Cat:
    
    all = []

    def __init__( self, name_given ):
        # use the set_name method to set the name to the name_given
        self.name = name_given
        Cat.all.append( self )


    @classmethod
    def all_names( cls ):
# RETURNING A "LIST COMPREHENTION"
#                    a variable we declare to
#                   represent one of the elements in
#                      the list, Cat.all
#                           |
#                           V
        return [ c.name for c in cls.all ]
#                   ^
#                   |
#               what we want to
#             go in the new list


    @classmethod
    def all_introductions( cls ):
        for cat in cls.all:
            cat.say_hello()


    # a way to read the name
    def get_name( self ):
        return self._name

    # a way to change the name
    def set_name( self, new_name ):
        if type( new_name ) == str:
            self._name = new_name
        else:
            raise ValueError( "Name must be a string" )

    # the needed instruction to make sure we can use the methods get_name and
    # set_name to read and write the property
    name = property( get_name, set_name )



    def say_hello( self ):
        print( f"Hello everyone, I'm {self.name} here to write some code!" )


c1 = Cat( 'Luke' )
c2 = Cat( 'Leia' )

more_cats = [ 'Rose', 'Baxter', 'Murphy' ]

for cat_name in more_cats:
    Cat( cat_name )

ipdb.set_trace()