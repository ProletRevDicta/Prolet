import os,sys
for a in os.walk(sys.path[0]):
    for b in a[2]:
        if('['in b)or(']'in b):
            print(b)
            os.rename(b,b.replace('[','(').replace(']',')'))
