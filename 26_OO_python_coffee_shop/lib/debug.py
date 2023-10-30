#!/usr/bin/env python3
import ipdb

from classes.many_to_many import Customer
from classes.many_to_many import Order
from classes.many_to_many import Coffee

if __name__ == '__main__':
    print("HELLO! :) let's debug")

    c1 = Customer('Emiley')
    c2 = Customer('Kailey')
    coffee1 = Coffee('Mocha')
    coffee2 = Coffee('Flat white')
    coffee3 = Coffee('Latte')
    o1 = Order(c1, coffee1, 8.0)
    o2 = Order(c1, coffee1, 5.0)
    o3 = Order(c1, coffee1, 2.0)
    
    ipdb.set_trace()
