import random

def make_score(num):
    score = [random.randint(0,100) for i in range(num)]
    return score

def less_average(score):
    num = len(score)
    sum_score = sum(score)
    ave_num = sum_score/float(num)
    less_ave = [i for i in score if i<ave_num]
    return (ave_num,len(less_ave))

if __name__=="__main__":
    score = make_score(40)
    average_num,less_num = less_average(score)
    print 'the average score is:',average_num
    print "Less average score is:",less_num
    print "List Scores [from big to small]:",sorted(score,reverse=True)