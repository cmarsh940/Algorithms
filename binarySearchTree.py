import numpy as np
from sklearn.linear_model import LinearRegression
from bokeh.plotting import figure, show, output_notebook

def search(node, value):
    if node:
        x, left, right = node
        this = value == x
        lsearch = value < x and search(left, value)
        rsearch = value > x and search(right, value)
        return this or lsearch or rsearch

def add(node, value):
    if node:
        x, left, right = node
        this = value == x and node
        ladd = value < x and (x, add(left, value), right)
        radd = value > x and (x, left, add(right, value))
        return this or ladd or radd
    return value, None, None

def depth(node):
    return node and max(depth(node[1]), depth(node[2])) + 1 or 0

def iterate(node):
    if node:
        x, left, right = node
        yield from iterate(left)
        yield x
        yield from iterate(right)


# RUN

data = [2, 16, 4, 2, 2, 11, 9, 0, 14, 11, 11, 9, 12, 7, 2, 12, 3, 9, 6, 12]

root = None
for value in data:
    root = add(root, value)
    
print('depth', depth(root))
print(list(iterate(root)))
print(10, search(root, 10))
print(16, search(root, 16))



tree_vs_depth = {
    10: [], 20: [], 50: [], 
    100: [], 200: [], 500: [], 
    1000: [], 2000: []
}

for _ in range(1000):
    root = None
    for i, value in enumerate(np.random.randint(100000, size=2500)):
        root = add(root, value)
        if i + 1 in tree_vs_depth:
            tree_vs_depth[i + 1].append(depth(root))

x, y = [], []

for i, d in tree_vs_depth.items():
    x.append([np.log(i)])
    y.append([np.mean(d), np.min(d), np.max(d), np.std(d)])
    print('{:4} items: depth[mean,min,max,std]={}'.format(i, np.round(y[-1], 1)))
    
x, y = np.array(x), np.array(y)




model_mean = LinearRegression().fit(x, y[:, 0])
print('mean', model_mean.coef_[0], model_mean.intercept_)

model_min = LinearRegression().fit(x, y[:, 1])
print('min', model_min.coef_[0], model_min.intercept_)

model_max = LinearRegression().fit(x, y[:, 2])
print('max', model_max.coef_[0], model_max.intercept_)


output_notebook()

plot = figure()

plot.scatter(x.ravel(), y[:, 0])
plot.scatter(x.ravel(), y[:, 1])
plot.scatter(x.ravel(), y[:, 2])

plot.line([0, 10], [model_mean.predict(0), model_mean.predict(10)], color='green')
plot.line([0, 10], [model_min.predict(0), model_min.predict(10)], color='red')
plot.line([0, 10], [model_max.predict(0), model_max.predict(10)], color='red')

show(plot)




















