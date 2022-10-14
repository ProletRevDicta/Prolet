import os,sys
for a in os.walk(sys.path[0]):
    for b in a[2]:
        if b[-3:]in['txt','pdf']:
            if'_'in b:
                p1,p2='%s/%s'%(a[0],b),'%s/%s'%(a[0],b.replace('_',' '))
                print(p1,'-->',p2)
                os.rename(p1,p2)
