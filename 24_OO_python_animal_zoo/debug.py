from lib.animal import Animal
from lib.zoo import Zoo

# code here


# e.g.  

z1 = Zoo( 'Micke Grove Zoo', 'Lodi, CA' )
z2 = Zoo('San Francisco Zoo', 'San Francisco, CA')
z3 = Zoo('Another San Francisco Zoo', 'San Francisco, CA')

a1 = Animal( 'Lion', 75, 'Luke', z1 )
a2 = Animal( 'Lion', 35, 'Simba', z1 )
a3 = Animal( 'Dog', 75, 'Apollo', z2 )




# ipdb allows us to stop our code & test stuff
import ipdb; ipdb.set_trace()
print( 'Thanks for visiting the zoo!' )