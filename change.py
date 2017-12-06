import math

def change(money):
    coins = { 'half_dollar': 0, 'quarter': 0, 'dime': 0, 'nickel': 0, 'penny': 0 }


    if (money <= 0):
        return coins
    if (money >= .5):
        coins['half_dollar'] = math.trunc(money/.5)
        money = money % .5
    if (money >= .25):
        coins['quarter'] = math.trunc(money/.25)
        money = money % .25
    if (money >= .1):
        coins['dime'] = math.trunc(money/.1)
        money = money % .1
    if (money >= .05):
        coins['nickel'] = math.trunc(money/.05)
        money = money % .05
    if (money >= .01):
        coins['penny'] = math.trunc(round((money/.01),2))

    return coins

money = 2.30
print(change(money))