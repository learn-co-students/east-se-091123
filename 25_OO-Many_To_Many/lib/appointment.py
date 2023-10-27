

# an Appointment "belongs-to" a Doctor?
# the Appointment NEEDS to take a doctor instance as an argument
class Appointment:
    all = []
    def __init__( self, time, doctor_instance, patient_instance ):
        self.time = time
        self.doctor = doctor_instance
        self.patient = patient_instance
        Appointment.all.append( self )
    