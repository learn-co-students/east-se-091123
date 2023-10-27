class Animal:
    all = []
    def __init__(self, species, weight, nickname, zoo):
        self.weight = weight
        self.zoo = zoo
        self.species = species
        self.nickname = nickname
        Animal.all.append(self)

    def get_species(self):
        return self._species

    def set_species(self, species):
        if not hasattr(self, '_species'):
            self._species = species
        else:
            print('cannot change species')

    species = property(get_species, set_species)

    @property
    def nickname(self):
        return self._nickname

    @nickname.setter
    def nickname(self, new_nickname):
        if not hasattr(self, '_nickname'):
            self._nickname = new_nickname
        else:
            print('cannot change nickname')

    @classmethod
    def find_by_species(cls, species):
        return [animal for animal in cls.all if animal.species == species]


    def __repr__(self):
        return f'<Animal species="{self.species}" zoo_name="{self.zoo.name}" >'