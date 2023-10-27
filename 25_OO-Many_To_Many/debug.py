from lib.appointment import Appointment
from lib.doctor import Doctor
from lib.patient import Patient

adam = Patient( 'Adam' )
emiley = Patient( 'Emiley' )

drno = Doctor( 'Dr. No' )
drwho = Doctor( 'Dr. Who' )

a1 = Appointment( 'tomorrow', drno, adam )
a2 = Appointment( 'halloween', drno, adam )

a3 = Appointment( 'thanksgiving', drwho, emiley )




# our code above!
import ipdb; ipdb.set_trace()