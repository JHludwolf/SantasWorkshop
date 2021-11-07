import datetime
import names
import random
from faker import Faker
from dateutil.relativedelta import relativedelta


class kid:
    def __init__(self, name, lastName, birthdate, address, country, goodness, wishlist):
        self.name = name
        self.lastName = lastName
        self.birthdate = birthdate
        self.address = address
        self.country = country
        self.goodness = goodness
        self.wishlist = wishlist

    def __str__(self):
        return '{name} {lastName}, {birthdate}\n{address}, {country}\n{goodness}, {wishlist}'.format(name = self.name, lastName = self.lastName, birthdate = self.birthdate, address = self.address, country = self.country, goodness = self.goodness, wishlist = self.wishlist)


#NAME GENERATOR - name, lastName Using names library
'''
randomGender = 'male' if random.randint(0,1) is 0 else 'female'
name = names.get_first_name(gender=randomGender)
lastName = names.get_last_name()
'''

# AGE GENERATOR - birthdate

start_date = datetime.date(2006, 1, 1)                                      # OLDEST CHILD
end_date = datetime.date(2019, 12, 31)                                      # YOUNGEST CHILD

time_between_dates = end_date - start_date
days_between_dates = time_between_dates.days

random_number_of_days = random.randrange(days_between_dates)
birthdate = start_date + datetime.timedelta(days=random_number_of_days)     # BIRTHDATE

rdelta = relativedelta(datetime.date.today(), birthdate)                    # GET AGE

# FAKER GENERATOR - countryName, countryLastName, address, country

fakers = ['en_US','ar_EG','ar_SA','cs_CZ','de_AT','de_CH','de_DE','dk_DK','el_GR','en_CA','en_GB','en_IE','hi_IN','es_ES','en_PH','fr_FR','ga_IE','hu_HU','id_ID', 'ja_JP','es_MX','ru_RU','ko_KR','lt_LT','lv_LV','ne_NP','no_NO','or_IN','pl_PL','ro_RO','sk_SK','sl_SI','sv_SE','th_TH','zh_TW']

randomCountryCode = fakers[random.randint(0, len(fakers))-1]
fake = Faker(randomCountryCode)

address = fake.address()
country = fake.current_country()

countryLastName = fake.last_name()
# countryName = fake.first_name_female() # first_name_male()
countryName = fake.first_name_male() if random.randint(0,1) is 0 else fake.first_name_female()

# GOODNESS GENERATOR - goodness

'''
media = 0
malos = 0
for _ in range(1000000):
    randomNum = random.uniform(0.0, 500.0)
    goodness = randomNum if randomNum <= 10 else random.uniform(6.0, 11)
    if goodness <= 5: malos += 1
    media += goodness

print(media/1000000, malos)
'''

randomNum = random.uniform(0.0, 500.0)
goodness = randomNum if randomNum <= 10 else random.uniform(6.0, 11)

print(goodness)

testKid = kid(countryName, countryLastName, birthdate, address, country, goodness, [])

# print(testKid)