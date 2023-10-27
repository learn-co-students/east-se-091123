# Many to Many Relationships

We've seen the *one to many* relationship, a zoo having many animals for example.  But what if the animal is on a world tour and visiting *many* zoos.  We how have a situation where a Zoo has many animals, but if the animal is on tour, an animal could *have many zoos*!

Whenever there is this many to many join relationship, *it needs* a **join model** between the two.  In our Zoo example we could create a third class to represent the `visit` an animal makes to a zoo.

```
Zoo ----< Visit >---- Animal
```
Our new `Visit` model is now nothing more than a one to many relationship, happening twice.  The Zoo *has many* visits, the Animal *has many* visits, and the Visit *belongs to* both.

Since the `Visit` belongs to both the `Zoo` and the `Animal`, it will need to take both instances as arguments when creating `Visit` instances.

```python
class Visit:
    all = []
    def __init__( self, date, zoo_instance, animal_instance ):
        self.date = date
        self.zoo = zoo_instance
        self.animal = animal_instance
        Visit.all.append( self )
```
Notice too we're keeping track of all our Visit instances in a *class attribute* of `all`.  This way, Zoos and Animals can look through the visits to see which ones their related to!  For example:
```python
class Zoo:
    def __init__( self, name, location ):
        self.name = name
        self.location = location

    def visits( self ):
        return [ v for v in Visit.all if v.zoo == self ]
```
Should any instances of visit be associtated with a particular Zoo, the `visits` instance method will return only Visit instances related to that Zoo.

Once we know which visits the Zoo are related to, and since each visit has an Animal associated with it, we can pull the Animal instances ***from those visits***.
```python
class Zoo:
    def __init__( self, name, location ):
        self.name = name
        self.location = location

    def visits( self ):
        return [ v for v in Visit.all if v.zoo == self ]

    # new code
    def animals( self ):
        return [ v.animal for v in self.visits() ]
```
Here we see our new `animals` method in the Zoo class returning a list of animals, but doing so using the previous instance method we wrote, only usings Visit instances associated with the Zoo.

Conversely, we can do the same thing from the Animal class!

```python
class Animal:
    def __init__( self, name, species ):
        self.name = name
        self.species = species

    def visits( self ):
        return [ v for v in Visit.all if v.animal == self ]

    def zoos( self ):
        return [ v.zoo for v in self.visits() ]
```

Here an instance of Animal **has many** Visits, and **has many** Zoos ***through*** the Visit

When ever we have two has-many-through relationships connected to each other, like our Zoo having many Animals though the Visit, or an Animal having many Zoos though the Visit, this becomes a **many to many** relationship between the Zoo and Animal.

Most importantly by having the information about the relationship on only one of our models, we adhere to our Single Source of Truth.  Both the Animal and Zoo class need only to look at the one record, all the visits, to gather related instnaces.