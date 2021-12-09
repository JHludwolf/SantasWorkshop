import datetime

class Elf:
    def __init__(self, name, yearsOfService, deliveryCountry, manufacturedToys, wage):
        self.name = name
        self.yearsOfService = yearsOfService
        self.deliveryCountry = deliveryCountry
        self.manufacturedToys = manufacturedToys
        self.wage = wage

    def getCSV(self):
        attributes = [self.name, self.yearsOfService, self.deliveryCountry, self.manufacturedToys, self.wage]
        return ','.join(attributes)