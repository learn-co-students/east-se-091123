from lib.appointment import Appointment

# Patient ----< Appointment >----- Doctor

class Patient:
    def __init__( self, name ):
        self.name = name

    def appointments( self ):
        return [ a for a in Appointment.all if a.patient == self ]

    def doctors( self ):
        return [ a.doctor for a in self.appointments() ]

    def __repr__( self ):
        return f'<Patient name: {self.name}>'