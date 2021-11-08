import datetime
import random
from faker import Faker
from dateutil.relativedelta import relativedelta

fakers = ['en_US','ar_EG','ar_SA','cs_CZ','de_AT','de_CH','de_DE','dk_DK','el_GR','en_CA','en_GB','en_IE','hi_IN','es_ES','en_PH','fr_FR','ga_IE','hu_HU','id_ID', 'ja_JP','es_MX','ru_RU','ko_KR','lt_LT','lv_LV','ne_NP','no_NO','or_IN','pl_PL','ro_RO','sk_SK','sl_SI','sv_SE','th_TH','zh_TW']


def getRandomDate():
    start_date = datetime.date(2006, 1, 1)                                      # OLDEST CHILD
    end_date = datetime.date(2019, 12, 31)                                      # YOUNGEST CHILD

    time_between_dates = end_date - start_date
    days_between_dates = time_between_dates.days

    random_number_of_days = random.randrange(days_between_dates)
    birthdate = start_date + datetime.timedelta(days=random_number_of_days)     # BIRTHDATE

    return birthdate

def getRandomNameLastAddressCountry():
    randomCountryCode = fakers[random.randint(0, len(fakers))-1]
    fake = Faker(randomCountryCode)

    address = fake.address()
    address = address.replace('\n','. ')
    country = fake.current_country()
    #country = country.replace(',','.')

    countryLastName = fake.last_name()
    countryName = fake.first_name_male() if random.randint(0,1) is 0 else fake.first_name_female()

    return countryName, countryLastName, address, country

def getRandomGoodness():
    randomNum = random.uniform(0.0, 500.0)
    goodness = randomNum if randomNum <= 10 else random.uniform(6.0, 11)
    if goodness > 10: goodness = 10

    return goodness

def getRandomKid():
    name, lastName, address, country = getRandomNameLastAddressCountry()
    birthdate = getRandomDate()
    goodness = getRandomGoodness()

    return name, lastName, birthdate, address, country, goodness