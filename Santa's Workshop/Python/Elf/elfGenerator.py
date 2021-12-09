from elfGeneratorFunctions import getRandomElf
from elfClass import Elf
import csv

elfs  = 10000
with open('elf.csv', 'w', newline='') as csvfile:
    # fieldNames = ['Name', 'Last Name', 'Birthdate', 'Address', 'Country', 'Goodness']
    writer = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    for _ in range(elfs):
        name, yearsOfService, deliveryCountry, manufacturedToys, wage = getRandomElf()
        randomKid = Elf(name, yearsOfService, deliveryCountry, manufacturedToys, wage)
        writer.writerow([name, yearsOfService, deliveryCountry, manufacturedToys, wage])



