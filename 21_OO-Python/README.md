# Object-Oriented Python

### Swabts:
 - Create a new Python class
 - Give our new class methods
 - Pass new instances information during instantiation
 - Protect attributes with properties
---
Up until now we've been dealing stricly with functions.  We write a function, it is designed to do whatever work, and when invoked the function will do what it's programmed to do.  

Classes on the other hand are a bit different than functions.  A class represents the *idea* of something.  If we were to write a Python class for a chair then a beanbag, or a barstool, or a throne, or a dining chair could all be considered *instances* of our chair class.

These *instances* of our class are what we call **objects** in Python.

## Creating a new Class
Classes in Python can be created with the `class` keyword:

```python
class Chair:
    pass
```

Here we have a class, which while not doing anything yet, is still enough code to create an instance of the class.  Instances can be created by applying the same double parentheses we do when invoking functions:

```python
>>> class Chair:
...     pass
... 
>>> Chair()
<__main__.Chair object at 0x10758e9a0>
>>> 
```

There we can see our Chair class *instantiating*, or "creating" a new instance.

## Giving our instances functionality
We can also *encapsulate* different bits of functionality in our class.  For example:

```python
class Cat:
    def meow( self ):
        print( 'meeyaow!' )
```

This function we wrote in our Cat class can now be considered an *instance method* of our Cat class.  It can be called on an instance of Cat!

```python
>>> class Cat:
...     def meow( self ):
...         print( 'meeyaow!' )
... 
>>> c1 = Cat()
>>> c1.meow()
meeyaow!
>>> 
```

### What is `self`?
You may have noticed that one parameter we just gave to our instance method, meow.  You may have also noticed that when we invoked `meow`, we didn't pass any arguments to that parameter.

By default, Python passes a representation of the instance as the first argument to every instance method.  `self` can be thought of as a sort of "mirror", so if we need a referrence to a specific cat, we can use `self` to refer to the specific instance.

## Dunder Methods
Python also provides a special methods that provide extra functionality to our classes.  They're called `dunder` methods for their "double underscores".  Primarily we will be focusing on one that sets up or instance upon instantiation, `__init__`.

The `__init__` method allows us to provide information to the instance when it's created, as well as associate that information with our new instance.

```python
class Cat:
    def __init__( self, cat_name ):
        self.name = cat_name
```

By providing a second paramter to `__init__` we can now give our cat a name during instantiation.

```python
>>> c1 = Cat( 'Luke' )
>>> c1.name
'Luke'
>>> 
```

Notice the use of `self` in our dunder method.  We want the argument to be associated with our `Cat` instance.  The line `self.name = cat_name` takes the cat name we provided and assigned it *as an **attribute*** of the cat.

## Protecting our attributes as Properties

While giving our Cats names is cool and all, what if we wanted to make sure the name given was not a boolean or integer, and only a string?

```python
>>> c2 = Cat( False )
>>> c2.name
False
>>> 
```

That's not cool!  We need a way to make sure when a name is given, it's checked to make sure it's a string.  We can create special methods to `get` and `set` our attribute.  When we do this our attribute can become a *property*.

```python
class Cat:
    def __init__( self, cat_name ):
        self.name = cat_name

    def get_name( self ):
        return self._name

    def set_name( self, new_name ):
        if type( name ) == str:
            self._name = new_name
        else:
            raise ValueError( 'name must be string' )

    name = property( get_name, set_name )

```

Let's unpack that last example.  Here we wrote two seperate methods, `get_name` and `set_name`, to read and write our attribute.  Then those two methods are passed as arguments to the `property` function.  This gives our instance a `name` just like before, only this time if we try to *get* or *set* the name, the methods are ran instead!

Also too notice the single underscore in each method when trying to read or write the `name`.  This is to differentiate between the data we're trying to save and the name of our new property.  If we called `self.name` from inside the method, Python would think we're trying to use our new property, which is also called `name`!

Look what happens if we make this subtle change:
```python
class Cat:
    def __init__( self, name ):
        self.name = name

    def get_name( self ):
        return self.name
```
By removing the single underscore in `get_name` our method thinks it's calling the property!

```python
c1 = Cat( 'Luke' )
c1.name
*** RecursionError: maximum recursion depth exceeded 
```
`self.name` calls the getter `get_name` which tries to return `self.name`, which is our new property `name`, which calls our getter `get_name`!

Adding the single underscore to where we keep the data prevents this infinate loop.  ;)     