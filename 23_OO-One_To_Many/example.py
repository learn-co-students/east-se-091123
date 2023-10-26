import ipdb
# One to many relationship

# A building "has many" apartments

#       building ----< apartment

# An apartment "belongs to" a building

#       apartment >---- building

# If something "belongs to" anything else, it's the responsibility of the 
# "belongs to" side to keep track of the relationship.



class Building:
    def __init__( self, name ):
        self.name = name

    def apartments( self ):
        # should return a list of apartments that are in this building.
        # new_list = []
        # for apartment in Apartment.all:
        #     if apartment.building == self:
        #         new_list.append( apartment )
        # return new_list
        return [ a for a in Apartment.all if a.building == self ]



class Apartment:
    all = []
    def __init__( self, number, building_instance ):
        self.number = number
        self.building = building_instance
        Apartment.all.append( self )


    def my_building( self ):
        return f'This is Apt# {self.number} in {self.building.name}'



ham = Building( 'The Hamilton' )
empire = Building( 'Empire State' )

h1 = Apartment( '1a', ham )
h2 = Apartment( 'Penthouse Suite', ham )

e1 = Apartment( '202', empire )

ipdb.set_trace()





# a many to many?

# any time we have a "many to many", we need a join in the middle to 
# "belong to" both

#  doctor ----< appointment >----- patient

class Doctor:
    def __init__( self, name ):
        self.name = name

    def appointments( self ):
        return [ a for a in Appointment.all if a.doctor == self ]

    # a doctor "has many" patients "through" the appointment
    # "has many though"
    def patients( self ):
        return [ a.patient for a in self.appointments() ]




class Patient:
    def __init__( self, name ):
        self.name = name

class Appointment:
    all = []
    def __init__( self, date, doctor_instance, patient_instance ):
        self.date = date
        self.doctor = doctor_instance
        self.patient = patient_instance
        Appointment.all.append( self )