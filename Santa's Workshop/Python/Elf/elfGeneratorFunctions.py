import datetime
import random
from faker import Faker
from dateutil.relativedelta import relativedelta

fakers = ['en_US','ar_EG','ar_SA','cs_CZ','de_AT','de_CH','de_DE','dk_DK','el_GR','en_CA','en_GB','en_IE','hi_IN','es_ES','en_PH','fr_FR','ga_IE','hu_HU','id_ID', 'ja_JP','es_MX','ru_RU','ko_KR','lt_LT','lv_LV','ne_NP','no_NO','or_IN','pl_PL','ro_RO','sk_SK','sl_SI','sv_SE','th_TH','zh_TW']

def getRandomNameCountry():
    randomCountryCode = fakers[random.randint(0, len(fakers))-1]
    fake = Faker(randomCountryCode)

    country = fake.current_country()

    countryName = fake.first_name_male() if random.randint(0,1) is 0 else fake.first_name_female()

    return countryName, country

def getRandomYearsOfService():
    return random.randint(0, 1813)

def getRandomManufacturedToys():
    return random.randint(10,100000)

def getWage():
    return random.randint(30,150)

def getRandomElf():
    name, deliveryCountry = getRandomNameCountry()
    yearsOfService = getRandomYearsOfService()
    manufacturedToys = getRandomManufacturedToys()
    wage = getWage()

    return name, yearsOfService, deliveryCountry, manufacturedToys, wage