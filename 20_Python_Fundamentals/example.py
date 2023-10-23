

# To create a new Python app, it's "pipenv --python 3.8"

# To access that app's environment => "pipenv shell"

# pipenv install <package> is how we add new libraries to our app
# e.g. pipenv install flask

# import statements look a little different.  ;) 
# from flask import Flask

import ipdb
# "set_trace" is the tool we can use to stop code execution
# ipdb.set_trace()


# no declaration keywords when making variables

# function have their own scope!  So a variable of the same name can hold a 
# diffrent value in an inner scope.

# meow = 'cat sound' 

# def the_function():
#     meow = 'potato'
#     print( f'from inside function: {meow}' )

# the_function()

# print( f'outside the function: {meow}' )

# LOGIC:  'and', 'or', and 'not'

# if 1 == 2 or 2 == 2:
#     print( 'that is truthy logic' )

# if not False:
#     print( 'not false is the same thing as true!')

# LOOPS!

# a while loop can create a command line tool!
# user_input = 'starting value'
# while user_input != 'x':
#     # 'input' is a built in function to caputure user input from the termainl
#     user_input = input( '<3 ' )
#     if user_input == 'h':
#         print( 'This is where a help menu would go!' )
#     elif user_input == 'x':
#         print( 'goodbye!' )
#     else:
#         print( f'{user_input} is not a valid option' )



# listOfNumbers = [ 1,2,4,5,6,7,8 ]

# # list comprehension!  a quick way to make a new list! 

# new_list = [ potato * 10 for potato in listOfNumbers ]


# list_of_names = [ 'adam', 'emiley', 'ix', 'rose' ]

# # fun new bracket notations that bring back things like JS splice or slice
# print( list_of_names[0:3] )

# new_list = [ name for name in list_of_names if name != 'adam' ]

# new_list = []
# for name_string in list_of_names:
#     if name_string != 'adam':
#         new_list.append( name_string )


# Our key / value pair data structure is the Dictionary

# our_dict = { "name": "adam", "rank": "raver" }

# our_dict[ 'mp' ] = 9001 # add a key

# del our_dict['name'] #remove a key!


# def give_the_square( some_number):
#     return some_number * some_number

# new_number = give_the_square( 12 )



# NEW DATA STRUCTURES
# the "tuple", just like a list, but you can't change what's inside!

# the_tuple = ( 'zero', 'one', 'two', 'three' )
# print( the_tuple )


# the set!  An ordered, UNIQUE collection of elements

# the_set = { 1, 2, 3, 4, 4, 4, 4, 4, 5, 6 }

# print( the_set )

