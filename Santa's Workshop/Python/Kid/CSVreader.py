import pandas as pd

empdata = pd.read_csv('../../kids.csv', index_col=False, delimiter = ',')
empdata.head()