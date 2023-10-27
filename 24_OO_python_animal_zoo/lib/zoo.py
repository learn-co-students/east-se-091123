from lib.animal import Animal

class Zoo:
    all = []
    def __init__(self, name, location):
        self.name = name
        self.location = location
        Zoo.all.append(self)

    @property
    def animals(self):
        return [animal for animal in Animal.all if animal.zoo == self]

    @property
    def animal_species(self):
        species = []
        for animal in self.animals:
            if animal.species not in species:
                species.append(animal.species)

        return species

    @property
    def animal_nicknames(self):
        return [animal.nickname for animal in self.animals]

    def find_by_species(self, species):
        return [animal for animal in self.animals if animal.species == species]

    @classmethod
    def find_by_location(cls, location):
        return [zoo for zoo in cls.all if zoo.location == location]
    
    def __repr__(self):
        return f'<Zoo name="{self.name}" location="{self.location}" >'

