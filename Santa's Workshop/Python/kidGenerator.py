from kidGeneratorFunctions import getRandomKid
from kidClass import Kid
import csv

kids  = 1000000
with open('kids.csv', 'w', newline='') as csvfile:
    # fieldNames = ['Name', 'Last Name', 'Birthdate', 'Address', 'Country', 'Goodness']
    writer = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    for _ in range(kids):
        name, lastName, birthdate, address, country, goodness = getRandomKid()
        randomKid = Kid(name, lastName, birthdate, address, country, goodness)
        writer.writerow([name, lastName, birthdate, address, country, goodness])



