import numpy as np
import pandas as pd
from numpy import convolve
import matplotlib.pyplot as plt

def movingaverage (values, window):
    weights = np.repeat(1.0, window)/window
    sma = np.convolve(values, weights, 'valid')
    return sma


x = [1,2,3,4,5,6,7,8,9,10]
q = pd.read_csv('test2.csv')
q = np.array(q)
y = q[:,0]

yma = movingaverage(y,695)
print yma