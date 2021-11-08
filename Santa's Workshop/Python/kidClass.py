import datetime

class Kid:
    def __init__(self, name, lastName, birthdate, address, country, goodness, wishlist = []):
        self.name = name
        self.lastName = lastName
        self.birthdate = birthdate
        self.address = address
        self.country = country
        self.goodness = goodness
        self.wishlist = wishlist

    def __str__(self):
        return '{name} {lastName}, {birthdate}\n{address}, {country}\n{goodness}, {wishlist}'.format(name = self.name, lastName = self.lastName, birthdate = self.birthdate, address = self.address, country = self.country, goodness = self.goodness, wishlist = self.wishlist)
    
    def getCSV(self):
        attributes = [self.name, self.lastName, self.birthdate.strftime(f"%m/%d/%Y"), self.address, self.country, str(self.goodness)]
        return ','.join(attributes)