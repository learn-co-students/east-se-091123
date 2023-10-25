# Class Attributes and Methods

### Swabts
- Assign a class attribute to a class
- Create a class methods
- Remember instances with a class attribute

We've seen how an instance of a class can have attributes as well as methods.  Well, ***the class as a whole*** can also have attributes and methods.

## Class Attributes
To define an attribute for the entire class, not just an instance, all that is needed is to define the variable outside of any instance method:

```python
class Cat:
    number_of_cats = 0

    def __init__( self, name ):
        self.name = name
```

In the above example, `number_of_cats` is an attribute of the **entire Cat class**, visible to all instances.  By convention we can access this attribute directly off the class' name:

```python
Cat.number_of_cats # => 0
```

While it is possible to access the **class attribute** from an instance, by convention this is frowned upon.

## Class Methods
Methods can be written which can be called on the class as well!  For example:

```python
class Cat
    number_of_cats = 0

    def __init__( self, name ):
        self.name = name

    @classmethod
    def increment_cat_number( cls ):
        Cat.number_of_cats += 1 
```

Notice the `cls` parameter of our class method.  Just like instnace methods being given the instance in the `self` parameter, class methods *give us the class* as the first argument.  So our method can be rewritten as so:

```python
class Cat
    number_of_cats = 0

    def __init__( self, name ):
        self.name = name

    @classmethod
    def increment_cat_number( cls ):
        cls.number_of_cats += 1 
```

## Remembering Objects
Until we get our SQL database the only way our classes will know about their instances will be by "remembering them".  We achieve this by creating a class constant to hold all the instances, then in our `__init__` method assigning the instance to the class constant.

```python
class Cat
    all = []

    def __init__( self, name ):
        self.name = name
        Cat.all.append( self )

    @classmethod
    def all_names( cls ):
        return [ c.name for c in Cat.all ]
```

Here we create a class attribute of `all`, that's set equal to a list.  Then in our class method we use that list to return all the names from each cat instance.

Notice how we're not using our `cls` parameter.  The above could be refactored like so:

```python
class Cat
    all = []

    def __init__( self, name ):
        self.name = name
        Cat.all.append( self )

    @classmethod
    def all_names( cls ):
        return [ c.name for c in cls.all ]
```