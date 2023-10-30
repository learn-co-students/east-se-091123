import pytest

from classes.many_to_many import Coffee
from classes.many_to_many import Customer
from classes.many_to_many import Order


class TestCoffee:
    """Coffee in many_to_many.py"""

    def test_has_name(self):
        """Coffee is initialized with a name"""
        coffee = Coffee("Mocha")
        assert coffee.name == "Mocha"

    def test_name_is_valid_string(self):
        """Coffee is initialized with a name of type str longer than 2.0 chars"""
        coffee = Coffee("Mocha")
        assert isinstance(coffee.name, str)

        # uncomment the next two lines if using Exceptions
        # with pytest.raises(Exception):
        #     Coffee(2.0)

        # uncomment the next two lines if using Exceptions
        # with pytest.raises(Exception):
        #     Coffee("me")

    def test_name_is_immutable(self):
        """cannot change the name of the coffee"""
        coffee = Coffee("Mocha")

        # comment out the next two lines if using Exceptions
        coffee.name = "Peppermint Mocha"
        assert coffee.name == "Mocha"

        # uncomment the next two lines if using Exceptions
        # with pytest.raises(Exception):
        #     coffee.name = "Peppermint Mocha"

    def test_has_many_orders(self):
        """coffee has many orders"""
        coffee_1 = Coffee("Hazelnut Latte")
        coffee_2 = Coffee("Mocha")
        customer = Customer("Steve")
        order_1 = Order(customer, coffee_1, 2.0)
        order_2 = Order(customer, coffee_1, 5.0)
        order_3 = Order(customer, coffee_2, 5.0)

        assert len(coffee_1.orders()) == 2
        assert len(coffee_2.orders()) == 1
        assert order_1 in coffee_1.orders()
        assert order_2 in coffee_1.orders()
        assert order_3 not in coffee_1.orders()
        assert order_3 in coffee_2.orders()

    def test_orders_of_type_order(self):
        """coffee orders are of type Order"""
        coffee = Coffee("Vanilla Latte")
        customer = Customer("Steve")
        Order(customer, coffee, 2.0)
        Order(customer, coffee, 5.0)

        assert isinstance(coffee.orders()[0], Order)
        assert isinstance(coffee.orders()[1], Order)

    def test_has_many_customers(self):
        """coffee has many customers"""
        coffee = Coffee("Flat White")
        customer = Customer("Steve")
        customer_2 = Customer("Dima")
        customer_3 = Customer("Luca")
        Order(customer, coffee, 2.0)
        Order(customer_2, coffee, 5.0)

        assert customer in coffee.customers()
        assert customer_2 in coffee.customers()
        assert customer_3 not in coffee.customers()

    def test_has_unique_customers(self):
        """coffee has unique list of all the customers that have ordered it"""
        coffee = Coffee("Vanilla Latte")
        customer = Customer("Steve")
        customer_2 = Customer("Dima")
        Order(customer, coffee, 2.0)
        Order(customer_2, coffee, 2.0)
        Order(customer, coffee, 5.0)

        assert len(set(coffee.customers())) == len(coffee.customers())
        assert len(coffee.customers()) == 2

    def test_customers_of_type_customer(self):
        """coffee customers are of type Customer"""
        coffee = Coffee("Vanilla Latte")
        customer = Customer("Steve")
        customer_2 = Customer("Dima")
        Order(customer, coffee, 2.0)
        Order(customer_2, coffee, 5.0)

        assert isinstance(coffee.customers()[0], Customer)
        assert isinstance(coffee.customers()[1], Customer)

    def test_get_number_of_orders(self):
        """coffee tracks the number of times it has been ordered"""
        coffee_1 = Coffee("Mocha")
        coffee_2 = Coffee("Vanilla Latte")
        customer = Customer("Steve")
        Order(customer, coffee_1, 2.0)
        Order(customer, coffee_1, 5.0)

        assert coffee_1.num_orders() == 2
        assert coffee_2.num_orders() == 0

    def test_average_price(self):
        """coffee calculates the average price of its orders"""
        coffee_1 = Coffee("Mocha")
        coffee_2 = Coffee("Vanilla Latte")
        customer = Customer("Steve")
        customer_2 = Customer("Dima")
        Order(customer, coffee_1, 2.0)
        Order(customer_2, coffee_1, 5.0)
        Order(customer, coffee_2, 5.0)

        assert coffee_1.average_price() == 3.5
