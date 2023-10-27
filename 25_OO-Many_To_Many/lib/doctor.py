from lib.appointment import Appointment

#  doctor ----< appointment >----- patient

class Doctor:
    def __init__( self, name ):
        self.name = name
        
    def appointments( self ):
        # for a has-many, like a Doctor "has-many" appointments
        # we need to do some search
        return [ a for a in Appointment.all if a.doctor == self ]

    def patients( self ):
        # take the filtered appointments we just got with the above appointments
        # method, and use it to pull out the patients.
        return [ a.patient for a in self.appointments() ]



    @property
    def name( self ):
        return self._name

    @name.setter
    def name( self, new_name ):
        if type( new_name ) == str:
            self._name = new_name
        else:
            print( 'name must be string')
   