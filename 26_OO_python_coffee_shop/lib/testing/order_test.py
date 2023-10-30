import pytest

from classes.many_to_many import Coffee
from classes.many_to_many import Customer
from classes.many_to_many import Order


class TestOrders:
    '''Order in many_to_many.py'''

    def test_has_price(self):
        '''Order is initialized with a price'''
        coffee = Coffee("Mocha")
        customer = Customer('Steve')
        order_1 = Order(customer, coffee, 2.0)
        order_2 = Order(customer, coffee, 5.0)

        assert (order_1.price == 2.0)
        assert (order_2.price == 5.0)
    
    def test_price_is_valid(self):
        """price is of type float and between 1.0 and 10.0"""
        coffee = Coffee("Mocha")
        customer = Customer('Steve')
        order_1 = Order(customer, coffee, 2.0)
        order_2 = Order(customer, coffee, 5.0)
        
        assert isinstance(order_1.price, float)
        assert isinstance(order_2.price, float)
        
        # uncomment the next two lines if using Exceptions
        # with pytest.raises(Exception):
        #     Order(customer, coffee, 0.99)
        
        # uncomment the next two lines if using Exceptions
        # with pytest.raises(Exception):
        #     Order(customer, coffee, 10.01)
        
    def test_price_is_immutable(self):
        """price is immutable"""
        coffee = Coffee("Mocha")
        customer = Customer('Steve')
        order_1 = Order(customer, coffee, 2.0)
        
        # comment out the next two lines if using Exceptions
        order_1.price = 3.0
        assert order_1.price == 2.0
        
        # uncomment the next two lines if using Exceptions
        # with pytest.raises(Exception):
        #     order_1.price = 3.0

    def test_has_a_customer(self):
        '''order has a customer .'''
        coffee = Coffee("Mocha")
        customer_1 = Customer('Wayne')
        customer_2 = Customer('Dima')
        order_1 = Order(customer_1, coffee, 2.0)
        order_2 = Order(customer_2, coffee, 5.0)

        assert (order_1.customer == customer_1)
        assert (order_2.customer == customer_2)

    def test_customer_of_type_customer(self):
        '''customer is of type Customer'''
        coffee = Coffee("Vanilla Latte")
        customer_1 = Customer('Wayne')
        customer_2 = Customer('Dima')
        order_1 = Order(customer_1, coffee, 2.0)
        order_2 = Order(customer_2, coffee, 5.0)

        assert (isinstance(order_1.customer, Customer))
        assert (isinstance(order_2.customer, Customer))

    def test_has_a_coffee(self):
        '''order has a coffee.'''
        coffee_1 = Coffee("Mocha")
        coffee_2 = Coffee("Peppermint Chai")
        customer = Customer('Wayne')
        order_1 = Order(customer, coffee_1, 2.0)
        order_2 = Order(customer, coffee_2, 5.0)

        assert (order_1.coffee == coffee_1)
        assert (order_2.coffee == coffee_2)

    def test_coffee_of_type_coffee(self):
        '''coffee is of type Coffee'''
        coffee_1 = Coffee("Vanilla Latte")
        coffee_2 = Coffee("Peppermint Chai")
        customer = Customer('Steve')
        order_1 = Order(customer, coffee_1, 2.0)
        order_2 = Order(customer, coffee_2, 5.0)

        assert (isinstance(order_1.coffee, Coffee))
        assert (isinstance(order_2.coffee, Coffee))

    def test_get_all_orders(self):
        '''Order class all attribute'''
        Order.all = []
        coffee = Coffee("Mocha")
        customer = Customer('Wayne')
        customer_2 = Customer('Dima')
        order_1 = Order(customer, coffee, 2.0)
        order_2 = Order(customer_2, coffee, 5.0)

        assert (len(Order.all) == 2.0)
        assert (order_1 in Order.all)
        assert (order_2 in Order.all)
